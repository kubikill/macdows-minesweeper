!function(){"use strict";let e=0,a=byId("xyzzypixel");document.onkeydown=t=>{t.key=="xyzzy"[e]?e++:e=0,e>=5&&(DOM.playarea.board.tiles.forEach((e=>{e.addEventListener("mouseover",(()=>{gameVars.xyzzyShift&&(board[e.dataset.row][e.dataset.column].hasMine?a.style.backgroundColor="#000":a.style.backgroundColor="#FFF")}))})),gameVars.xyzzyActivated=!0,document.onkeydown=e=>{"Shift"==e.key&&(gameVars.xyzzyShift=!0)},document.onkeyup=e=>{"Shift"==e.key&&(gameVars.xyzzyShift=!1)})}}();
//# sourceMappingURL=index.80fea996.js.map
