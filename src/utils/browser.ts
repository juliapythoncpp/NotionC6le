const taggingClass = "ASUPERSECRETCLASS";
const toastId = "TOASTID";

export const showToast = (content: string, delayMs?: number, id: string = toastId) => {
  let toast = document.createElement("p");
  toast.id = id;
  toast.classList.add(taggingClass);
  toast.innerHTML = content;
  toast.setAttribute('style',
    "min-width: 250px; margin-left: -40px; background-color: #4448; color: #ddd;text-align: center; border-radius: 10px; padding: 30px; position: fixed; z-index: 1; left: 50%; top: 30px;font-size: 16px;");
  document.body.appendChild(toast);
  if(delayMs != undefined){
    setTimeout(function () {
      toast.remove();
    }, delayMs);
  }else{
    toast.onclick = cleanup;
  }
}

export const updateToast = (content: string, append: boolean = true, id: string = toastId) => {
  let toast = document.getElementById(id);
  if(toast)
    toast!.innerHTML = append ? toast?.innerHTML + content : content;
  else
    console.log("No toast element, call showToast first!");
}

export const cleanup = () => {
  document.querySelectorAll('.' + taggingClass).forEach(el => {
    el.remove();
  });
  document.getElementById("BOOKMARKLETSCRIPTTAG")?.remove();
}