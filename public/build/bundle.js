
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_style(node, key, value, important) {
        if (value === null) {
            node.style.removeProperty(key);
        }
        else {
            node.style.setProperty(key, value, important ? 'important' : '');
        }
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.46.4' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/App.svelte generated by Svelte v3.46.4 */

    const file = "src/App.svelte";

    function create_fragment(ctx) {
    	let script;
    	let script_src_value;
    	let t0;
    	let main;
    	let div42;
    	let div0;
    	let a0;
    	let t2;
    	let a1;
    	let t4;
    	let a2;
    	let t6;
    	let a3;
    	let t8;
    	let a4;
    	let t10;
    	let div41;
    	let section0;
    	let h20;
    	let span0;
    	let t12;
    	let span1;
    	let t14;
    	let a5;
    	let img0;
    	let img0_src_value;
    	let t15;
    	let t16;
    	let div6;
    	let div3;
    	let div1;
    	let t17;
    	let p0;
    	let t19;
    	let div2;
    	let p1;
    	let span2;
    	let t21;
    	let a6;
    	let t22;
    	let i0;
    	let t23;
    	let span3;
    	let t25;
    	let p2;
    	let span4;
    	let t27;
    	let a7;
    	let t28;
    	let i1;
    	let t29;
    	let a8;
    	let t30;
    	let i2;
    	let t31;
    	let a9;
    	let t32;
    	let i3;
    	let t33;
    	let div5;
    	let div4;
    	let t34;
    	let p3;
    	let a10;
    	let t35;
    	let i4;
    	let t36;
    	let span5;
    	let t38;
    	let p4;
    	let a11;
    	let t39;
    	let i5;
    	let t40;
    	let span6;
    	let t42;
    	let section1;
    	let div9;
    	let div7;
    	let t43;
    	let div8;
    	let t44;
    	let h21;
    	let span7;
    	let t46;
    	let span8;
    	let t48;
    	let t49;
    	let div16;
    	let div11;
    	let p5;
    	let i6;
    	let t50;
    	let t51;
    	let h30;
    	let t53;
    	let div10;
    	let a12;
    	let t54;
    	let i7;
    	let t55;
    	let div13;
    	let p6;
    	let i8;
    	let t56;
    	let t57;
    	let h31;
    	let t59;
    	let div12;
    	let a13;
    	let t60;
    	let i9;
    	let t61;
    	let a14;
    	let t62;
    	let i10;
    	let t63;
    	let div15;
    	let p7;
    	let i11;
    	let t64;
    	let t65;
    	let h32;
    	let t67;
    	let div14;
    	let a15;
    	let t68;
    	let i12;
    	let t69;
    	let a16;
    	let t70;
    	let i13;
    	let t71;
    	let h22;
    	let span9;
    	let t73;
    	let span10;
    	let t75;
    	let t76;
    	let div21;
    	let div17;
    	let h33;
    	let t77;
    	let br0;
    	let t78;
    	let t79;
    	let div18;
    	let h34;
    	let t80;
    	let br1;
    	let t81;
    	let t82;
    	let div19;
    	let h35;
    	let t83;
    	let br2;
    	let t84;
    	let br3;
    	let t85;
    	let t86;
    	let div20;
    	let h36;
    	let t87;
    	let br4;
    	let t88;
    	let t89;
    	let div22;
    	let p8;
    	let t91;
    	let section2;
    	let div23;
    	let t92;
    	let h23;
    	let span11;
    	let t94;
    	let t95;
    	let div30;
    	let div25;
    	let p9;
    	let t97;
    	let h37;
    	let t99;
    	let div24;
    	let a17;
    	let t100;
    	let i14;
    	let t101;
    	let div27;
    	let p10;
    	let t103;
    	let h38;
    	let t105;
    	let div26;
    	let a18;
    	let t106;
    	let i15;
    	let t107;
    	let div29;
    	let p11;
    	let t109;
    	let h39;
    	let t111;
    	let div28;
    	let a19;
    	let t112;
    	let i16;
    	let t113;
    	let p12;
    	let t114;
    	let a20;
    	let t115;
    	let i17;
    	let t116;
    	let section3;
    	let div31;
    	let t117;
    	let h24;
    	let span12;
    	let t119;
    	let div32;
    	let img1;
    	let img1_src_value;
    	let t120;
    	let img2;
    	let img2_src_value;
    	let t121;
    	let div34;
    	let div33;
    	let p13;
    	let t123;
    	let h310;
    	let t125;
    	let p14;
    	let t127;
    	let div35;
    	let img3;
    	let img3_src_value;
    	let t128;
    	let img4;
    	let img4_src_value;
    	let t129;
    	let img5;
    	let img5_src_value;
    	let t130;
    	let img6;
    	let img6_src_value;
    	let t131;
    	let p15;
    	let t133;
    	let img7;
    	let img7_src_value;
    	let t134;
    	let img8;
    	let img8_src_value;
    	let t135;
    	let div38;
    	let div36;
    	let p16;
    	let t137;
    	let img9;
    	let img9_src_value;
    	let t138;
    	let div37;
    	let p17;
    	let t140;
    	let img10;
    	let img10_src_value;
    	let t141;
    	let div39;
    	let t142;
    	let div40;
    	let t143;
    	let a21;
    	let t145;
    	let a22;

    	const block = {
    		c: function create() {
    			script = element("script");
    			t0 = space();
    			main = element("main");
    			div42 = element("div");
    			div0 = element("div");
    			a0 = element("a");
    			a0.textContent = "Resume";
    			t2 = space();
    			a1 = element("a");
    			a1.textContent = "Medium";
    			t4 = space();
    			a2 = element("a");
    			a2.textContent = "LinkedIn";
    			t6 = space();
    			a3 = element("a");
    			a3.textContent = "GitHub";
    			t8 = space();
    			a4 = element("a");
    			a4.textContent = "FB";
    			t10 = space();
    			div41 = element("div");
    			section0 = element("section");
    			h20 = element("h2");
    			span0 = element("span");
    			span0.textContent = "Pyokyeong Son";
    			t12 = text("  \n\t\t\t\t");
    			span1 = element("span");
    			span1.textContent = "손표경";
    			t14 = space();
    			a5 = element("a");
    			img0 = element("img");
    			t15 = text("   한국어 사이트");
    			t16 = space();
    			div6 = element("div");
    			div3 = element("div");
    			div1 = element("div");
    			t17 = space();
    			p0 = element("p");
    			p0.textContent = "Korean, from Japan, in America.";
    			t19 = space();
    			div2 = element("div");
    			p1 = element("p");
    			span2 = element("span");
    			span2.textContent = "Majoring ";
    			t21 = space();
    			a6 = element("a");
    			t22 = text("Comp. Sci. ");
    			i0 = element("i");
    			t23 = space();
    			span3 = element("span");
    			span3.textContent = "Economics";
    			t25 = space();
    			p2 = element("p");
    			span4 = element("span");
    			span4.textContent = "Interests ";
    			t27 = space();
    			a7 = element("a");
    			t28 = text("Design ");
    			i1 = element("i");
    			t29 = space();
    			a8 = element("a");
    			t30 = text("Math ");
    			i2 = element("i");
    			t31 = space();
    			a9 = element("a");
    			t32 = text("Writing ");
    			i3 = element("i");
    			t33 = space();
    			div5 = element("div");
    			div4 = element("div");
    			t34 = space();
    			p3 = element("p");
    			a10 = element("a");
    			t35 = text("Saint Maur Int'l ");
    			i4 = element("i");
    			t36 = space();
    			span5 = element("span");
    			span5.textContent = "  Class of\n\t\t\t2019";
    			t38 = space();
    			p4 = element("p");
    			a11 = element("a");
    			t39 = text("Duke\n\t\t\tUniversity ");
    			i5 = element("i");
    			t40 = space();
    			span6 = element("span");
    			span6.textContent = "  Class of 2025";
    			t42 = space();
    			section1 = element("section");
    			div9 = element("div");
    			div7 = element("div");
    			t43 = space();
    			div8 = element("div");
    			t44 = space();
    			h21 = element("h2");
    			span7 = element("span");
    			span7.textContent = "CS";
    			t46 = space();
    			span8 = element("span");
    			span8.textContent = "& Math";
    			t48 = text(" | Projects");
    			t49 = space();
    			div16 = element("div");
    			div11 = element("div");
    			p5 = element("p");
    			i6 = element("i");
    			t50 = text("  Computational Mathematics, Automated Theorem Proving");
    			t51 = space();
    			h30 = element("h3");
    			h30.textContent = "Exploration of Fundamental Mathematics via Implementation of Common Axiom Systems and Proof Generation";
    			t53 = space();
    			div10 = element("div");
    			a12 = element("a");
    			t54 = text("Computational Essay  ");
    			i7 = element("i");
    			t55 = space();
    			div13 = element("div");
    			p6 = element("p");
    			i8 = element("i");
    			t56 = text("  Machine Learning, Optimization");
    			t57 = space();
    			h31 = element("h3");
    			h31.textContent = "Evaluation of Optimization Algorithms for Machine Learning Applications";
    			t59 = space();
    			div12 = element("div");
    			a13 = element("a");
    			t60 = text("Code  ");
    			i9 = element("i");
    			t61 = space();
    			a14 = element("a");
    			t62 = text("Paper  ");
    			i10 = element("i");
    			t63 = space();
    			div15 = element("div");
    			p7 = element("p");
    			i11 = element("i");
    			t64 = text("  Cryptography");
    			t65 = space();
    			h32 = element("h3");
    			h32.textContent = "Mathematics of Deciphering the Enigma Machine";
    			t67 = space();
    			div14 = element("div");
    			a15 = element("a");
    			t68 = text("Code  ");
    			i12 = element("i");
    			t69 = space();
    			a16 = element("a");
    			t70 = text("Paper  ");
    			i13 = element("i");
    			t71 = space();
    			h22 = element("h2");
    			span9 = element("span");
    			span9.textContent = "CS";
    			t73 = space();
    			span10 = element("span");
    			span10.textContent = "& Math";
    			t75 = text(" | Skills");
    			t76 = space();
    			div21 = element("div");
    			div17 = element("div");
    			h33 = element("h3");
    			t77 = text("Swift & iOS");
    			br0 = element("br");
    			t78 = text("App Development");
    			t79 = space();
    			div18 = element("div");
    			h34 = element("h3");
    			t80 = text("HTML & CSS");
    			br1 = element("br");
    			t81 = text("Front-End Web Dev");
    			t82 = space();
    			div19 = element("div");
    			h35 = element("h3");
    			t83 = text("Wolfram ");
    			br2 = element("br");
    			t84 = text("Mathematica ");
    			br3 = element("br");
    			t85 = text("& Language");
    			t86 = space();
    			div20 = element("div");
    			h36 = element("h3");
    			t87 = text("Linux System ");
    			br4 = element("br");
    			t88 = text("Administration");
    			t89 = space();
    			div22 = element("div");
    			p8 = element("p");
    			p8.textContent = "C, Java, Python, Wolfram Language, Swift, HTML & CSS, Bash";
    			t91 = space();
    			section2 = element("section");
    			div23 = element("div");
    			t92 = space();
    			h23 = element("h2");
    			span11 = element("span");
    			span11.textContent = "Writing";
    			t94 = text(" | Academic");
    			t95 = space();
    			div30 = element("div");
    			div25 = element("div");
    			p9 = element("p");
    			p9.textContent = "2019.12. Focus 195FS — Music, Medicine and Natural Science";
    			t97 = space();
    			h37 = element("h3");
    			h37.textContent = "The Reflection of Renaissance Humanism in East Asian Philosophy from an Artistic, Medical, and Musical Perspective of Korea";
    			t99 = space();
    			div24 = element("div");
    			a17 = element("a");
    			t100 = text("PDF  ");
    			i14 = element("i");
    			t101 = space();
    			div27 = element("div");
    			p10 = element("p");
    			p10.textContent = "2020.04. Writing 101 — Myth of Meritocracy";
    			t103 = space();
    			h38 = element("h3");
    			h38.textContent = "The Myth of Meritocracy and False Hope in Korean College Admissions and Preparation";
    			t105 = space();
    			div26 = element("div");
    			a18 = element("a");
    			t106 = text("PDF\n\t\t\t\t\t\t\t  ");
    			i15 = element("i");
    			t107 = space();
    			div29 = element("div");
    			p11 = element("p");
    			p11.textContent = "2019.07. IB Japanese Language and Literature";
    			t109 = space();
    			h39 = element("h3");
    			h39.textContent = "羅生門 Alt.";
    			t111 = space();
    			div28 = element("div");
    			a19 = element("a");
    			t112 = text("PDF\n\t\t\t\t\t\t\t  ");
    			i16 = element("i");
    			t113 = space();
    			p12 = element("p");
    			t114 = text("More casual writing can be found at  \n\t\t\t\t");
    			a20 = element("a");
    			t115 = text("Medium\n\t\t\t\t\t");
    			i17 = element("i");
    			t116 = space();
    			section3 = element("section");
    			div31 = element("div");
    			t117 = space();
    			h24 = element("h2");
    			span12 = element("span");
    			span12.textContent = "Design";
    			t119 = space();
    			div32 = element("div");
    			img1 = element("img");
    			t120 = space();
    			img2 = element("img");
    			t121 = space();
    			div34 = element("div");
    			div33 = element("div");
    			p13 = element("p");
    			p13.textContent = "2019 Summer Internship";
    			t123 = space();
    			h310 = element("h3");
    			h310.textContent = "Sprout Email Newsletter - Web Design & Branding";
    			t125 = space();
    			p14 = element("p");
    			p14.textContent = "Design Guide";
    			t127 = space();
    			div35 = element("div");
    			img3 = element("img");
    			t128 = space();
    			img4 = element("img");
    			t129 = space();
    			img5 = element("img");
    			t130 = space();
    			img6 = element("img");
    			t131 = space();
    			p15 = element("p");
    			p15.textContent = "Newsletter Design";
    			t133 = space();
    			img7 = element("img");
    			t134 = space();
    			img8 = element("img");
    			t135 = space();
    			div38 = element("div");
    			div36 = element("div");
    			p16 = element("p");
    			p16.textContent = "Before";
    			t137 = space();
    			img9 = element("img");
    			t138 = space();
    			div37 = element("div");
    			p17 = element("p");
    			p17.textContent = "After";
    			t140 = space();
    			img10 = element("img");
    			t141 = space();
    			div39 = element("div");
    			t142 = space();
    			div40 = element("div");
    			t143 = text("Icons made by ");
    			a21 = element("a");
    			a21.textContent = "Freepik";
    			t145 = text(" from ");
    			a22 = element("a");
    			a22.textContent = "www.flaticon.com";
    			if (!src_url_equal(script.src, script_src_value = "https://kit.fontawesome.com/41b7efd9e7.js")) attr_dev(script, "src", script_src_value);
    			attr_dev(script, "crossorigin", "anonymous");
    			add_location(script, file, 4, 1, 61);
    			attr_dev(a0, "class", "sns-nav svelte-nidtj2");
    			attr_dev(a0, "href", "assets/Pyokyeong_Son_Resume.pdf");
    			attr_dev(a0, "target", "_blank");
    			add_location(a0, file, 12, 2, 259);
    			attr_dev(a1, "href", "//medium.com/@pyoky3289");
    			attr_dev(a1, "target", "_blank");
    			attr_dev(a1, "class", "sns-nav svelte-nidtj2");
    			add_location(a1, file, 13, 2, 346);
    			attr_dev(a2, "href", "//www.linkedin.com/in/pk-son/");
    			attr_dev(a2, "target", "_blank");
    			attr_dev(a2, "class", "sns-nav svelte-nidtj2");
    			add_location(a2, file, 14, 2, 425);
    			attr_dev(a3, "href", "//github.com/pyoky");
    			attr_dev(a3, "target", "_blank");
    			attr_dev(a3, "class", "sns-nav svelte-nidtj2");
    			add_location(a3, file, 15, 2, 512);
    			attr_dev(a4, "href", "//www.facebook.com/pyoky.son");
    			attr_dev(a4, "target", "_blank");
    			attr_dev(a4, "class", "sns-nav svelte-nidtj2");
    			add_location(a4, file, 16, 1, 585);
    			attr_dev(div0, "class", "navbar container svelte-nidtj2");
    			add_location(div0, file, 11, 1, 226);
    			set_style(span0, "font-weight", "500");
    			set_style(span0, "font-size", "1.8rem");
    			set_style(span0, "padding-left", "0");
    			attr_dev(span0, "class", "svelte-nidtj2");
    			add_location(span0, file, 32, 4, 887);
    			attr_dev(span1, "class", "korean svelte-nidtj2");
    			set_style(span1, "font-size", "1.2rem");
    			add_location(span1, file, 33, 4, 987);
    			attr_dev(h20, "class", "svelte-nidtj2");
    			add_location(h20, file, 31, 3, 878);
    			if (!src_url_equal(img0.src, img0_src_value = "assets/kor.svg")) attr_dev(img0, "src", img0_src_value);
    			set_style(img0, "display", "inline-block");
    			set_style(img0, "vertical-align", "-5px");
    			set_style(img0, "height", "22px");
    			add_location(img0, file, 35, 53, 1107);
    			attr_dev(a5, "href", "index-korean.html");
    			set_style(a5, "float", "right");
    			attr_dev(a5, "class", "svelte-nidtj2");
    			add_location(a5, file, 35, 3, 1057);
    			attr_dev(div1, "class", "separator svelte-nidtj2");
    			add_location(div1, file, 40, 3, 1312);
    			set_style(p0, "padding-bottom", "20px");
    			attr_dev(p0, "class", "svelte-nidtj2");
    			add_location(p0, file, 42, 3, 1375);
    			attr_dev(span2, "class", "tags svelte-nidtj2");
    			add_location(span2, file, 44, 6, 1481);
    			attr_dev(i0, "class", "fa fa-angle-double-down fa-xs svelte-nidtj2");
    			add_location(i0, file, 45, 68, 1592);
    			attr_dev(a6, "class", "cs svelte-nidtj2");
    			attr_dev(a6, "href", "#cs-math");
    			set_style(a6, "color", "#B4D293");
    			add_location(a6, file, 45, 3, 1527);
    			set_style(span3, "color", "#cfcfcf");
    			attr_dev(span3, "class", "svelte-nidtj2");
    			add_location(span3, file, 47, 27, 1664);
    			attr_dev(p1, "class", "svelte-nidtj2");
    			add_location(p1, file, 44, 3, 1478);
    			attr_dev(span4, "class", "tags svelte-nidtj2");
    			add_location(span4, file, 50, 6, 1734);
    			attr_dev(i1, "class", "fa fa-angle-double-down fa-xs svelte-nidtj2");
    			add_location(i1, file, 52, 21, 1864);
    			attr_dev(a7, "class", "graphic-design svelte-nidtj2");
    			attr_dev(a7, "href", "#graphic-design");
    			set_style(a7, "color", "#D53F77");
    			add_location(a7, file, 51, 3, 1780);
    			attr_dev(i2, "class", "fa fa-angle-double-down fa-xs svelte-nidtj2");
    			add_location(i2, file, 53, 64, 1979);
    			attr_dev(a8, "class", "math svelte-nidtj2");
    			attr_dev(a8, "href", "#cs-math");
    			set_style(a8, "color", "#0097DB");
    			add_location(a8, file, 53, 3, 1918);
    			attr_dev(i3, "class", "fa fa-angle-double-down fa-xs svelte-nidtj2");
    			add_location(i3, file, 54, 70, 2100);
    			attr_dev(a9, "class", "writing svelte-nidtj2");
    			attr_dev(a9, "href", "#writing");
    			set_style(a9, "color", "#FFE52B");
    			add_location(a9, file, 54, 3, 2033);
    			attr_dev(p2, "class", "svelte-nidtj2");
    			add_location(p2, file, 50, 3, 1731);
    			attr_dev(div2, "class", "intro-details");
    			add_location(div2, file, 43, 3, 1447);
    			attr_dev(div3, "class", "intro-element");
    			add_location(div3, file, 38, 2, 1259);
    			attr_dev(div4, "class", "separator svelte-nidtj2");
    			add_location(div4, file, 60, 3, 2232);
    			set_style(i4, "font-size", "0.5em");
    			set_style(i4, "vertical-align", "middle");
    			attr_dev(i4, "class", "fas fa-external-link-alt fa-xs svelte-nidtj2");
    			add_location(i4, file, 65, 41, 2412);
    			attr_dev(a10, "class", "saint-maur svelte-nidtj2");
    			attr_dev(a10, "href", "https://www.stmaur.ac.jp");
    			attr_dev(a10, "target", "_blank");
    			add_location(a10, file, 64, 6, 2317);
    			attr_dev(span5, "class", "tags svelte-nidtj2");
    			add_location(span5, file, 67, 5, 2517);
    			attr_dev(p3, "class", "svelte-nidtj2");
    			add_location(p3, file, 64, 3, 2314);
    			set_style(i5, "font-size", "0.5em");
    			set_style(i5, "vertical-align", "middle");
    			attr_dev(i5, "class", "fas fa-external-link-alt fa-xs svelte-nidtj2");
    			add_location(i5, file, 70, 19, 2672);
    			attr_dev(a11, "class", "duke-univ svelte-nidtj2");
    			attr_dev(a11, "href", "https://www.duke.edu");
    			attr_dev(a11, "target", "_blank");
    			add_location(a11, file, 69, 6, 2583);
    			attr_dev(span6, "class", "tags svelte-nidtj2");
    			add_location(span6, file, 72, 6, 2778);
    			attr_dev(p4, "class", "svelte-nidtj2");
    			add_location(p4, file, 69, 3, 2580);
    			attr_dev(div5, "class", "intro-element");
    			add_location(div5, file, 58, 2, 2179);
    			attr_dev(div6, "class", "intro-container svelte-nidtj2");
    			add_location(div6, file, 37, 2, 1227);
    			attr_dev(section0, "class", "introduction container svelte-nidtj2");
    			add_location(section0, file, 28, 2, 793);
    			attr_dev(div7, "class", "separator cs svelte-nidtj2");
    			add_location(div7, file, 84, 4, 3031);
    			attr_dev(div8, "class", "separator math svelte-nidtj2");
    			add_location(div8, file, 85, 4, 3068);
    			attr_dev(div9, "class", "separator double svelte-nidtj2");
    			add_location(div9, file, 83, 3, 2996);
    			set_style(span7, "color", "#B4D293");
    			attr_dev(span7, "class", "svelte-nidtj2");
    			add_location(span7, file, 89, 7, 3147);
    			set_style(span8, "color", "#0097DB");
    			attr_dev(span8, "class", "svelte-nidtj2");
    			add_location(span8, file, 89, 47, 3187);
    			attr_dev(h21, "class", "svelte-nidtj2");
    			add_location(h21, file, 89, 3, 3143);
    			attr_dev(i6, "class", "fa fa-tags");
    			add_location(i6, file, 94, 21, 3377);
    			attr_dev(p5, "class", "tags svelte-nidtj2");
    			add_location(p5, file, 94, 5, 3361);
    			attr_dev(h30, "class", "svelte-nidtj2");
    			add_location(h30, file, 95, 5, 3477);
    			attr_dev(i7, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i7, file, 98, 114, 3729);
    			attr_dev(a12, "href", "https://community.wolfram.com/groups/-/m/t/1382544");
    			attr_dev(a12, "target", "_blank");
    			attr_dev(a12, "class", "svelte-nidtj2");
    			add_location(a12, file, 98, 6, 3621);
    			attr_dev(div10, "class", "links svelte-nidtj2");
    			add_location(div10, file, 97, 5, 3595);
    			attr_dev(div11, "class", "list-element project cs-math svelte-nidtj2");
    			add_location(div11, file, 93, 4, 3313);
    			attr_dev(i8, "class", "fa fa-tags");
    			add_location(i8, file, 103, 21, 3866);
    			attr_dev(p6, "class", "tags svelte-nidtj2");
    			add_location(p6, file, 103, 5, 3850);
    			attr_dev(h31, "class", "svelte-nidtj2");
    			add_location(h31, file, 104, 5, 3944);
    			attr_dev(i9, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i9, file, 107, 103, 4154);
    			attr_dev(a13, "href", "https://github.com/pyoky/nn-optimization-visualization");
    			attr_dev(a13, "target", "_blank");
    			attr_dev(a13, "class", "svelte-nidtj2");
    			add_location(a13, file, 107, 6, 4057);
    			attr_dev(i10, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i10, file, 108, 132, 4331);
    			attr_dev(a14, "href", "assets/Evaluation_of_Optimization_Algorithms_for_Machine_Learning_Applications.pdf");
    			attr_dev(a14, "target", "_blank");
    			attr_dev(a14, "class", "svelte-nidtj2");
    			add_location(a14, file, 108, 6, 4205);
    			attr_dev(div12, "class", "links svelte-nidtj2");
    			add_location(div12, file, 106, 5, 4031);
    			attr_dev(div13, "class", "list-element project cs-math svelte-nidtj2");
    			add_location(div13, file, 102, 4, 3802);
    			attr_dev(i11, "class", "fa fa-tags");
    			add_location(i11, file, 114, 21, 4469);
    			attr_dev(p7, "class", "tags svelte-nidtj2");
    			add_location(p7, file, 114, 5, 4453);
    			attr_dev(h32, "class", "svelte-nidtj2");
    			add_location(h32, file, 115, 5, 4529);
    			attr_dev(i12, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i12, file, 118, 87, 4697);
    			attr_dev(a15, "href", "https://github.com/pyoky/enigma-python");
    			attr_dev(a15, "target", "_blank");
    			attr_dev(a15, "class", "svelte-nidtj2");
    			add_location(a15, file, 118, 6, 4616);
    			attr_dev(i13, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i13, file, 119, 110, 4852);
    			attr_dev(a16, "href", "assets/The_Mathematics_of_Deciphering_the_Enigma_Machine.pdf");
    			attr_dev(a16, "target", "_blank");
    			attr_dev(a16, "class", "svelte-nidtj2");
    			add_location(a16, file, 119, 6, 4748);
    			attr_dev(div14, "class", "links svelte-nidtj2");
    			add_location(div14, file, 117, 5, 4590);
    			attr_dev(div15, "class", "list-element project cs-math svelte-nidtj2");
    			add_location(div15, file, 113, 4, 4405);
    			attr_dev(div16, "class", "list-container svelte-nidtj2");
    			add_location(div16, file, 92, 3, 3280);
    			set_style(span9, "color", "#B4D293");
    			attr_dev(span9, "class", "svelte-nidtj2");
    			add_location(span9, file, 125, 7, 4971);
    			set_style(span10, "color", "#0097DB");
    			attr_dev(span10, "class", "svelte-nidtj2");
    			add_location(span10, file, 125, 47, 5011);
    			attr_dev(h22, "class", "svelte-nidtj2");
    			add_location(h22, file, 125, 3, 4967);
    			add_location(br0, file, 130, 38, 5183);
    			attr_dev(h33, "class", "svelte-nidtj2");
    			add_location(h33, file, 130, 23, 5168);
    			attr_dev(div17, "class", "skill svelte-nidtj2");
    			add_location(div17, file, 130, 4, 5149);
    			add_location(br1, file, 131, 37, 5253);
    			attr_dev(h34, "class", "svelte-nidtj2");
    			add_location(h34, file, 131, 23, 5239);
    			attr_dev(div18, "class", "skill svelte-nidtj2");
    			add_location(div18, file, 131, 4, 5220);
    			add_location(br2, file, 132, 35, 5323);
    			add_location(br3, file, 132, 53, 5341);
    			attr_dev(h35, "class", "svelte-nidtj2");
    			add_location(h35, file, 132, 23, 5311);
    			attr_dev(div19, "class", "skill svelte-nidtj2");
    			add_location(div19, file, 132, 4, 5292);
    			add_location(br4, file, 133, 40, 5409);
    			attr_dev(h36, "class", "svelte-nidtj2");
    			add_location(h36, file, 133, 23, 5392);
    			attr_dev(div20, "class", "skill svelte-nidtj2");
    			add_location(div20, file, 133, 4, 5373);
    			attr_dev(div21, "class", "list-container skills cs-math svelte-nidtj2");
    			add_location(div21, file, 129, 3, 5101);
    			add_location(p8, file, 137, 4, 5488);
    			attr_dev(div22, "class", "more-skills cs");
    			add_location(div22, file, 136, 3, 5455);
    			attr_dev(section1, "id", "cs-math");
    			attr_dev(section1, "class", "cs-math");
    			add_location(section1, file, 80, 2, 2931);
    			attr_dev(div23, "class", "separator writing svelte-nidtj2");
    			add_location(div23, file, 148, 3, 5747);
    			set_style(span11, "color", "#FFE52B");
    			attr_dev(span11, "class", "svelte-nidtj2");
    			add_location(span11, file, 151, 7, 5794);
    			attr_dev(h23, "class", "svelte-nidtj2");
    			add_location(h23, file, 151, 3, 5790);
    			attr_dev(p9, "class", "tags svelte-nidtj2");
    			add_location(p9, file, 156, 5, 5971);
    			attr_dev(h37, "class", "svelte-nidtj2");
    			add_location(h37, file, 157, 5, 6055);
    			attr_dev(i14, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i14, file, 160, 181, 6401);
    			attr_dev(a17, "href", "assets/The_Reflection_of_Renaissance_Humanism_in_East_Asian_Philosophy_from_an_Artistic_ Medical_and_Musical_Perspective_of_Korea.pdf");
    			attr_dev(a17, "target", "_blank");
    			attr_dev(a17, "class", "svelte-nidtj2");
    			add_location(a17, file, 160, 6, 6226);
    			attr_dev(div24, "class", "essay links svelte-nidtj2");
    			add_location(div24, file, 159, 5, 6194);
    			attr_dev(div25, "class", "list-element academic svelte-nidtj2");
    			add_location(div25, file, 155, 4, 5930);
    			attr_dev(p10, "class", "tags svelte-nidtj2");
    			add_location(p10, file, 165, 5, 6515);
    			attr_dev(h38, "class", "svelte-nidtj2");
    			add_location(h38, file, 166, 5, 6583);
    			attr_dev(i15, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i15, file, 170, 19, 6858);
    			attr_dev(a18, "href", "assets/The_Myth_of_Meritocracy_and_False_Hope_in_Korean_College_Admissions_and_Preparation.pdf");
    			attr_dev(a18, "target", "_blank");
    			attr_dev(a18, "class", "svelte-nidtj2");
    			add_location(a18, file, 169, 6, 6714);
    			attr_dev(div26, "class", "essay links svelte-nidtj2");
    			add_location(div26, file, 168, 5, 6682);
    			attr_dev(div27, "class", "list-element academic svelte-nidtj2");
    			add_location(div27, file, 164, 4, 6474);
    			attr_dev(p11, "class", "tags svelte-nidtj2");
    			add_location(p11, file, 176, 5, 6979);
    			attr_dev(h39, "class", "svelte-nidtj2");
    			add_location(h39, file, 177, 5, 7049);
    			attr_dev(i16, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i16, file, 181, 19, 7178);
    			attr_dev(a19, "href", "assets/Rashomon_Alt.pdf");
    			attr_dev(a19, "target", "_blank");
    			attr_dev(a19, "class", "svelte-nidtj2");
    			add_location(a19, file, 180, 6, 7105);
    			attr_dev(div28, "class", "essay links svelte-nidtj2");
    			add_location(div28, file, 179, 5, 7073);
    			attr_dev(div29, "class", "list-element academic svelte-nidtj2");
    			add_location(div29, file, 175, 4, 6938);
    			attr_dev(div30, "class", "list-container svelte-nidtj2");
    			add_location(div30, file, 154, 3, 5897);
    			attr_dev(i17, "class", "fas fa-external-link-alt svelte-nidtj2");
    			add_location(i17, file, 192, 5, 7437);
    			attr_dev(a20, "href", "//medium.com/@pyoky3289");
    			attr_dev(a20, "target", "_blank");
    			attr_dev(a20, "class", "svelte-nidtj2");
    			add_location(a20, file, 190, 4, 7368);
    			set_style(p12, "font-size-adjust", "0.5");
    			attr_dev(p12, "class", "links svelte-nidtj2");
    			add_location(p12, file, 188, 3, 7268);
    			attr_dev(section2, "id", "writing");
    			attr_dev(section2, "class", "writing");
    			add_location(section2, file, 145, 2, 5674);
    			attr_dev(div31, "class", "separator graphic-design svelte-nidtj2");
    			add_location(div31, file, 204, 3, 7621);
    			set_style(span12, "color", "#D53F77");
    			attr_dev(span12, "class", "svelte-nidtj2");
    			add_location(span12, file, 205, 7, 7673);
    			attr_dev(h24, "class", "svelte-nidtj2");
    			add_location(h24, file, 205, 3, 7669);
    			attr_dev(img1, "class", "graphic-design-big-image layered-image svelte-nidtj2");
    			if (!src_url_equal(img1.src, img1_src_value = "assets/sprout-images/sprout-1.png")) attr_dev(img1, "src", img1_src_value);
    			add_location(img1, file, 208, 4, 7781);
    			attr_dev(img2, "class", "graphic-design-big-image toBeFadedIn overlay-image svelte-nidtj2");
    			if (!src_url_equal(img2.src, img2_src_value = "assets/sprout-images/sprout-2.png")) attr_dev(img2, "src", img2_src_value);
    			add_location(img2, file, 209, 4, 7880);
    			set_style(div32, "position", "relative");
    			set_style(div32, "left", "0");
    			set_style(div32, "top", "0");
    			add_location(div32, file, 207, 3, 7726);
    			attr_dev(p13, "class", "tags svelte-nidtj2");
    			add_location(p13, file, 214, 5, 8066);
    			attr_dev(h310, "class", "svelte-nidtj2");
    			add_location(h310, file, 216, 5, 8115);
    			attr_dev(div33, "class", "list-element svelte-nidtj2");
    			add_location(div33, file, 213, 4, 8034);
    			attr_dev(div34, "class", "list-container svelte-nidtj2");
    			add_location(div34, file, 212, 3, 8001);
    			attr_dev(p14, "class", "graphic-design-label");
    			add_location(p14, file, 223, 3, 8211);
    			attr_dev(img3, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img3.src, img3_src_value = "assets/sprout-images/sprout-3.png")) attr_dev(img3, "src", img3_src_value);
    			add_location(img3, file, 227, 4, 8316);
    			attr_dev(img4, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img4.src, img4_src_value = "assets/sprout-images/sprout-5.png")) attr_dev(img4, "src", img4_src_value);
    			add_location(img4, file, 228, 4, 8416);
    			attr_dev(img5, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img5.src, img5_src_value = "assets/sprout-images/sprout-6.png")) attr_dev(img5, "src", img5_src_value);
    			add_location(img5, file, 229, 4, 8516);
    			attr_dev(img6, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img6.src, img6_src_value = "assets/sprout-images/sprout-4.png")) attr_dev(img6, "src", img6_src_value);
    			add_location(img6, file, 230, 4, 8616);
    			attr_dev(div35, "class", "graphic-design-images-container svelte-nidtj2");
    			add_location(div35, file, 226, 3, 8266);
    			attr_dev(p15, "class", "graphic-design-label");
    			add_location(p15, file, 236, 3, 8729);
    			attr_dev(img7, "class", "graphic-design-big-image toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img7.src, img7_src_value = "assets/sprout-images/sprout-7.png")) attr_dev(img7, "src", img7_src_value);
    			add_location(img7, file, 238, 3, 8787);
    			attr_dev(img8, "class", "graphic-design-big-image toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img8.src, img8_src_value = "assets/sprout-images/sprout-8.png")) attr_dev(img8, "src", img8_src_value);
    			add_location(img8, file, 239, 3, 8883);
    			attr_dev(p16, "class", "graphic-design-label");
    			add_location(p16, file, 244, 5, 9074);
    			attr_dev(img9, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img9.src, img9_src_value = "assets/sprout-images/sprout-before.png")) attr_dev(img9, "src", img9_src_value);
    			add_location(img9, file, 245, 5, 9123);
    			add_location(div36, file, 243, 4, 9063);
    			attr_dev(p17, "class", "graphic-design-label");
    			add_location(p17, file, 248, 5, 9250);
    			attr_dev(img10, "class", "graphic-design-grid-element toBeFadedIn svelte-nidtj2");
    			if (!src_url_equal(img10.src, img10_src_value = "assets/sprout-images/sprout-after.png")) attr_dev(img10, "src", img10_src_value);
    			add_location(img10, file, 249, 5, 9298);
    			add_location(div37, file, 247, 4, 9239);
    			attr_dev(div38, "class", "graphic-design-images-container svelte-nidtj2");
    			set_style(div38, "grid-column-gap", "10px");
    			add_location(div38, file, 242, 3, 8981);
    			attr_dev(section3, "id", "graphic-design");
    			add_location(section3, file, 202, 2, 7587);
    			set_style(div39, "margin-bottom", "10px");
    			attr_dev(div39, "class", "separator svelte-nidtj2");
    			add_location(div39, file, 259, 2, 9469);
    			attr_dev(a21, "href", "https://www.flaticon.com/authors/freepik");
    			attr_dev(a21, "title", "Freepik");
    			attr_dev(a21, "class", "svelte-nidtj2");
    			add_location(a21, file, 262, 21, 9584);
    			attr_dev(a22, "href", "https://www.flaticon.com/");
    			attr_dev(a22, "title", "Flaticon");
    			attr_dev(a22, "class", "svelte-nidtj2");
    			add_location(a22, file, 262, 105, 9668);
    			add_location(div40, file, 262, 2, 9565);
    			add_location(div41, file, 26, 1, 739);
    			attr_dev(div42, "class", "container");
    			add_location(div42, file, 8, 1, 175);
    			add_location(main, file, 7, 0, 167);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, script);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			append_dev(main, div42);
    			append_dev(div42, div0);
    			append_dev(div0, a0);
    			append_dev(div0, t2);
    			append_dev(div0, a1);
    			append_dev(div0, t4);
    			append_dev(div0, a2);
    			append_dev(div0, t6);
    			append_dev(div0, a3);
    			append_dev(div0, t8);
    			append_dev(div0, a4);
    			append_dev(div42, t10);
    			append_dev(div42, div41);
    			append_dev(div41, section0);
    			append_dev(section0, h20);
    			append_dev(h20, span0);
    			append_dev(h20, t12);
    			append_dev(h20, span1);
    			append_dev(section0, t14);
    			append_dev(section0, a5);
    			append_dev(a5, img0);
    			append_dev(a5, t15);
    			append_dev(section0, t16);
    			append_dev(section0, div6);
    			append_dev(div6, div3);
    			append_dev(div3, div1);
    			append_dev(div3, t17);
    			append_dev(div3, p0);
    			append_dev(div3, t19);
    			append_dev(div3, div2);
    			append_dev(div2, p1);
    			append_dev(p1, span2);
    			append_dev(p1, t21);
    			append_dev(p1, a6);
    			append_dev(a6, t22);
    			append_dev(a6, i0);
    			append_dev(p1, t23);
    			append_dev(p1, span3);
    			append_dev(div2, t25);
    			append_dev(div2, p2);
    			append_dev(p2, span4);
    			append_dev(p2, t27);
    			append_dev(p2, a7);
    			append_dev(a7, t28);
    			append_dev(a7, i1);
    			append_dev(p2, t29);
    			append_dev(p2, a8);
    			append_dev(a8, t30);
    			append_dev(a8, i2);
    			append_dev(p2, t31);
    			append_dev(p2, a9);
    			append_dev(a9, t32);
    			append_dev(a9, i3);
    			append_dev(div6, t33);
    			append_dev(div6, div5);
    			append_dev(div5, div4);
    			append_dev(div5, t34);
    			append_dev(div5, p3);
    			append_dev(p3, a10);
    			append_dev(a10, t35);
    			append_dev(a10, i4);
    			append_dev(a10, t36);
    			append_dev(p3, span5);
    			append_dev(div5, t38);
    			append_dev(div5, p4);
    			append_dev(p4, a11);
    			append_dev(a11, t39);
    			append_dev(a11, i5);
    			append_dev(p4, t40);
    			append_dev(p4, span6);
    			append_dev(div41, t42);
    			append_dev(div41, section1);
    			append_dev(section1, div9);
    			append_dev(div9, div7);
    			append_dev(div9, t43);
    			append_dev(div9, div8);
    			append_dev(section1, t44);
    			append_dev(section1, h21);
    			append_dev(h21, span7);
    			append_dev(h21, t46);
    			append_dev(h21, span8);
    			append_dev(h21, t48);
    			append_dev(section1, t49);
    			append_dev(section1, div16);
    			append_dev(div16, div11);
    			append_dev(div11, p5);
    			append_dev(p5, i6);
    			append_dev(p5, t50);
    			append_dev(div11, t51);
    			append_dev(div11, h30);
    			append_dev(div11, t53);
    			append_dev(div11, div10);
    			append_dev(div10, a12);
    			append_dev(a12, t54);
    			append_dev(a12, i7);
    			append_dev(div16, t55);
    			append_dev(div16, div13);
    			append_dev(div13, p6);
    			append_dev(p6, i8);
    			append_dev(p6, t56);
    			append_dev(div13, t57);
    			append_dev(div13, h31);
    			append_dev(div13, t59);
    			append_dev(div13, div12);
    			append_dev(div12, a13);
    			append_dev(a13, t60);
    			append_dev(a13, i9);
    			append_dev(div12, t61);
    			append_dev(div12, a14);
    			append_dev(a14, t62);
    			append_dev(a14, i10);
    			append_dev(div16, t63);
    			append_dev(div16, div15);
    			append_dev(div15, p7);
    			append_dev(p7, i11);
    			append_dev(p7, t64);
    			append_dev(div15, t65);
    			append_dev(div15, h32);
    			append_dev(div15, t67);
    			append_dev(div15, div14);
    			append_dev(div14, a15);
    			append_dev(a15, t68);
    			append_dev(a15, i12);
    			append_dev(div14, t69);
    			append_dev(div14, a16);
    			append_dev(a16, t70);
    			append_dev(a16, i13);
    			append_dev(section1, t71);
    			append_dev(section1, h22);
    			append_dev(h22, span9);
    			append_dev(h22, t73);
    			append_dev(h22, span10);
    			append_dev(h22, t75);
    			append_dev(section1, t76);
    			append_dev(section1, div21);
    			append_dev(div21, div17);
    			append_dev(div17, h33);
    			append_dev(h33, t77);
    			append_dev(h33, br0);
    			append_dev(h33, t78);
    			append_dev(div21, t79);
    			append_dev(div21, div18);
    			append_dev(div18, h34);
    			append_dev(h34, t80);
    			append_dev(h34, br1);
    			append_dev(h34, t81);
    			append_dev(div21, t82);
    			append_dev(div21, div19);
    			append_dev(div19, h35);
    			append_dev(h35, t83);
    			append_dev(h35, br2);
    			append_dev(h35, t84);
    			append_dev(h35, br3);
    			append_dev(h35, t85);
    			append_dev(div21, t86);
    			append_dev(div21, div20);
    			append_dev(div20, h36);
    			append_dev(h36, t87);
    			append_dev(h36, br4);
    			append_dev(h36, t88);
    			append_dev(section1, t89);
    			append_dev(section1, div22);
    			append_dev(div22, p8);
    			append_dev(div41, t91);
    			append_dev(div41, section2);
    			append_dev(section2, div23);
    			append_dev(section2, t92);
    			append_dev(section2, h23);
    			append_dev(h23, span11);
    			append_dev(h23, t94);
    			append_dev(section2, t95);
    			append_dev(section2, div30);
    			append_dev(div30, div25);
    			append_dev(div25, p9);
    			append_dev(div25, t97);
    			append_dev(div25, h37);
    			append_dev(div25, t99);
    			append_dev(div25, div24);
    			append_dev(div24, a17);
    			append_dev(a17, t100);
    			append_dev(a17, i14);
    			append_dev(div30, t101);
    			append_dev(div30, div27);
    			append_dev(div27, p10);
    			append_dev(div27, t103);
    			append_dev(div27, h38);
    			append_dev(div27, t105);
    			append_dev(div27, div26);
    			append_dev(div26, a18);
    			append_dev(a18, t106);
    			append_dev(a18, i15);
    			append_dev(div30, t107);
    			append_dev(div30, div29);
    			append_dev(div29, p11);
    			append_dev(div29, t109);
    			append_dev(div29, h39);
    			append_dev(div29, t111);
    			append_dev(div29, div28);
    			append_dev(div28, a19);
    			append_dev(a19, t112);
    			append_dev(a19, i16);
    			append_dev(section2, t113);
    			append_dev(section2, p12);
    			append_dev(p12, t114);
    			append_dev(p12, a20);
    			append_dev(a20, t115);
    			append_dev(a20, i17);
    			append_dev(div41, t116);
    			append_dev(div41, section3);
    			append_dev(section3, div31);
    			append_dev(section3, t117);
    			append_dev(section3, h24);
    			append_dev(h24, span12);
    			append_dev(section3, t119);
    			append_dev(section3, div32);
    			append_dev(div32, img1);
    			append_dev(div32, t120);
    			append_dev(div32, img2);
    			append_dev(section3, t121);
    			append_dev(section3, div34);
    			append_dev(div34, div33);
    			append_dev(div33, p13);
    			append_dev(div33, t123);
    			append_dev(div33, h310);
    			append_dev(section3, t125);
    			append_dev(section3, p14);
    			append_dev(section3, t127);
    			append_dev(section3, div35);
    			append_dev(div35, img3);
    			append_dev(div35, t128);
    			append_dev(div35, img4);
    			append_dev(div35, t129);
    			append_dev(div35, img5);
    			append_dev(div35, t130);
    			append_dev(div35, img6);
    			append_dev(section3, t131);
    			append_dev(section3, p15);
    			append_dev(section3, t133);
    			append_dev(section3, img7);
    			append_dev(section3, t134);
    			append_dev(section3, img8);
    			append_dev(section3, t135);
    			append_dev(section3, div38);
    			append_dev(div38, div36);
    			append_dev(div36, p16);
    			append_dev(div36, t137);
    			append_dev(div36, img9);
    			append_dev(div38, t138);
    			append_dev(div38, div37);
    			append_dev(div37, p17);
    			append_dev(div37, t140);
    			append_dev(div37, img10);
    			append_dev(div41, t141);
    			append_dev(div41, div39);
    			append_dev(div41, t142);
    			append_dev(div41, div40);
    			append_dev(div40, t143);
    			append_dev(div40, a21);
    			append_dev(div40, t145);
    			append_dev(div40, a22);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			detach_dev(script);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let { name } = $$props;
    	const writable_props = ['name'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    	};

    	$$self.$capture_state = () => ({ name });

    	$$self.$inject_state = $$props => {
    		if ('name' in $$props) $$invalidate(0, name = $$props.name);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [name];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*name*/ ctx[0] === undefined && !('name' in props)) {
    			console.warn("<App> was created without expected prop 'name'");
    		}
    	}

    	get name() {
    		throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set name(value) {
    		throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    const app = new App({
        target: document.body,
        props: {
            name: 'world'
        }
    });

    return app;

})();
//# sourceMappingURL=bundle.js.map
