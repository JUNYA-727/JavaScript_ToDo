import "./styles.css";

const clickadd = () => {
  //テキストボックスの値を習得して､初期化を行う
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  back_com(inputText);
};

//要素の削除の関数
const deletelist = (target) => {
  document.getElementById("imcomplete").removeChild(target);
};
//完了から未完了に戻す関数
const back_com = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list_low";

  const li = document.createElement("li");
  li.innerText = text;

  //bottonの作成
  const completebotton = document.createElement("button");
  completebotton.innerText = "完了";
  //完了ボタンを押した際にどのような処理を行うか書く
  completebotton.addEventListener("click", () => {
    deletelist(deletebotton.parentNode);
    //完了リストに追加をする
    const addtarget = completebotton.parentNode;
    const text = addtarget.firstElementChild.innerText;
    addtarget.textContent = null;
    //liタグの生成､及び文字の挿入
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグの生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    backbutton.addEventListener("click", () => {
      //戻すを押して完了欄から失くす
      const deletetarget = backbutton.parentNode;
      document.getElementById("complete").removeChild(deletetarget);
      //戻るを押して完了欄から未完了に戻す
      const text = backbutton.parentNode.firstElementChild.innerText;
      back_com(text);
    });
    //divタグの子要素に追加を行う
    addtarget.appendChild(li);
    addtarget.appendChild(backbutton);

    document.getElementById("complete").appendChild(addtarget);
  });

  const deletebotton = document.createElement("button");
  deletebotton.innerText = "削除";
  //削除ボタンを押した際にどのような処理を行うか書く
  deletebotton.addEventListener("click", () => {
    deletelist(deletebotton.parentNode);
  });

  //divタグの中に子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completebotton);
  div.appendChild(deletebotton);

  //未完了のリストに追加するので
  document.getElementById("imcomplete").appendChild(div);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => clickadd());
