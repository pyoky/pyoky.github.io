---
aliases: 
tags:
  - Computing/Graphics
---
Intuitive Understanding:
- https://www.youtube.com/watch?v=VkIJbpdTujE
- 

Improvement over [[NERF]]s (pure neural network)
- 3-D Gaussians (3d bell curve) is fulled
    - Start with simple gaussian, use gradient descent to fit the scene better
    - Color harmonics, blending to achieve realism
    - 
- Rasterization is so much faster because traditional triangle rendering has so much more triangles, but GS uses much less gaussians
- 