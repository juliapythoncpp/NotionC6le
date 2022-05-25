try{
  const title = document.querySelector(
    "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > h3"
  ).textContent;
  console.log(`title: ${title}`);

  const author = document.querySelector(
    "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span5 > p.a-spacing-none.a-spacing-top-micro.a-size-base.a-color-secondary.kp-notebook-selectable.kp-notebook-metadata"
  ).textContent;
  console.log(`author: ${author}`);

  const bookLink = document.querySelector(
    "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a"
  ).getAttribute("href");
  console.log(`bookLink: ${bookLink}`);

  const imageLink = document.querySelector(
      "#annotation-scroller > div > div.a-row.a-spacing-base > div.a-column.a-span1.kp-notebook-bookcover-container > a > span > img"
    ).getAttribute("src");
    console.log(`imgLink: ${imageLink}`);

  const _highlights = document.querySelectorAll(
    "#kp-notebook-annotations > div.a-row.a-spacing-base"
  );

  const highlights =  Array.from(_highlights).map((el) => {
    const loc = parseInt(el.querySelector("#kp-annotation-location").getAttribute("value"));
    console.log(`loc: ${loc}`);
    const color = el.querySelector("#annotationHighlightHeader").textContent.split(" ")[0].toLowerCase();
    console.log(`color: ${color}`);
    const text = el.querySelector("#highlight")?.textContent;
    console.log(`text: ${text}`);
    return {
      loc: loc,
      color: color,
      text: text
    };
  });

  const result = {
    title: title,
    author: author,
    imageUrl: imageLink,
    bookUrl: bookLink,
    highlights: highlights
  };

  navigator.clipboard.writeText(JSON.stringify(result, null, 4)).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );

  let toast = document.createElement('p');
  toast.innerHTML = "&#128158; &#128018; &#128150;";
  toast.id = "TOASTMESSAGE";
  toast.style =
    "min-width: 250px;margin-left: -125px;background-color: #333;color: #f22;text-align: center;border-radius: 2px;padding: 16px;position: fixed;z-index: 1;left: 50%;top: 30px;font-size: 17px;";
  document.body.appendChild(toast);

  setTimeout(function () { toast.remove(); }, 3000);

}catch(err){
  alert(err);
}
