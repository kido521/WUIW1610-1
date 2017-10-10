# 版本控制
1. 依赖代码共享不及时
2. 需要指定时刻的版本
3. 快速找到问题

## 常用的版本控制
git  分布式 版本控制在每个开发者电脑上
svn  集中式 版本控制在中央服务器

## 下载安装
https://git-scm.com/downloads
window
 1. 下载安装包
 2. git.ext 安装

mac
1.安装HomeBrew
https://brew.sh/
2. 安装git
brew install git

------------------------------------
# git命令

先添加 用户名 和 邮箱
git config --global user.name "用户名"
git config --global user.email "邮箱"

## 在本地初始化一个文件夹 为仓库
1. 先建立项目目录
```
d:\desktop\kangniner
```
2. CLI进入项目目录
```
D:\Desktop\kangnier>
```
3. 使用git init 命名初始化为git仓库
```
D:\Desktop\kangnier> git init
```

git 工作流程
分为3个区

                                 ↓
                       h1  h2    h3
                       |   |     |
                      ----------------
工作区     暂存区         历史区
-----------------     -----------
    git status            git log
  |  工作区与历史区内容不同 |
  ---------------------------
          git diff
-------->------------>------->
     git add     git commit
     git add
     git add
----------------------------->
     git commit -a -m "create index.css"
<----------------------------
            git reset --hard 记录id 
                             ------
                              最少7位 
<----------------------------
           git checkout -- <filename> 
将所有文件添加到暂存盘
git add .  

将index.html文件添加到暂存盘
git add index.html 


将暂存盘的内容提交到历史区
git commit -m "注释内容"

------------------------------
将工作区的已修改内容提交到历史区
git commit -a -m "注释内容"
注意：修改过的内容可以提交,已经提交过一次了，才能使用该命令

-----------------------------
撤销工作区某个文件的修改
git checkout -- <filename>



https://github.com/allcky/kangniner.git

关联仓库
git remote add origin https://github.com/allcky/kangniner.git

给服务器提交数据
1. 先获取最新数据
git pull origin master

2. 再提交数据
git push origin master


