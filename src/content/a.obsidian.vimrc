" 将 jk 映射为退出插入模式（进入 Normal 模式）
imap jk <Esc>

" 快速跳转到行首和行尾（不用每次都费劲去按 ^ 和 $）
nmap H ^
nmap L $

" 使用系统剪贴板（让 Vim 的 yank 直接复制到系统剪贴板，方便跨软件粘贴）
set clipboard=unnamed
" 快捷折叠/展开大纲 (Emulate Folding)
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold<CR>
nmap zc :togglefold<CR>
nmap za :togglefold<CR>

exmap surround_wiki surround [[ ]]
exmap surround_double_quotes surround " "
exmap surround_brackets surround ( )
exmap surround_square_brackets surround [ ]

" 清除默认的 s 键功能（原功能是 cl，不常用）
nunmap s"
vunmap s

" 快捷操作：按下 s[ 就能把当前单词或选中文本用双链包起来
map s[ :surround_wiki<CR>
map s" :surround_double_quotes<CR>
map sb :surround_brackets<CR>
map s( :surround_brackets<CR>

" 1. 首先解绑空格键（这一步至关重要"，否则会和 Obsidian 默认行为冲突）
unmap <Space>

" 2. 直接用 <Space> 代替 <leader> 来配置你的组合拳"
" 示例 A：空格 + f + h 清除搜索高亮
nmap <Space>fh :nohl<CR>

" 示例 B：空格 + f + s 保存文件
exmap save obcommand editor:save-file
nmap <Space>fs :save<CR>

" 示例 C：空格 + w + v 垂直分屏
exmap vsplit obcommand workspace:split-vertical
nmap <Space>wv :vsplit<CR>
