---
aliases: []
tags:
  - Computing
---
## Nimf-Anthy Installation

[How do I restore the default repositories?](https://askubuntu.com/questions/124017/how-do-i-restore-the-default-repositories)

[하모니 공지 - 하모니카 저장소 공개키 서명 문제 해결방법](https://hamonikr.org/hamoni_notice/91981)

[하모니카(HamoniKR) 하모니 - apt update시 인증서 문제](https://hamonikr.org/hamoni_board/106932)

[Installation](https://nimf-i18n.gitlab.io/installation/)

```bash
software-properties-gtk # open the gui repsitories 
curl -sL https://apt.hamonikr.org/setup_hamonikr.jin | sudo -E bash - # add the Hamonikr repos to apt sources
sudo apt install ca-certificates # update certificate authority files
sudo apt install update # update apt cache
sudo add-apt-repository ppa:hodong/nimf # add nimf dev's repo to apt source
# and the logout and back in.
```

The `hamonikr` repo and `ppa:hodong/nimf` has different versions names. The binaries are probably the same but apt will complain about dependency versions. Installing the `hodong/nimf` repo will resolve the dependency issue.
