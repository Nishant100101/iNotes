function HtmlCheck({ note }) {
  const containsHTML = /<\/?[a-z][\s\S]*>/i.test(note);

  if (containsHTML) {
    return <div dangerouslySetInnerHTML={{ __html: note }} />;
  } else {
    return <div>{note}</div>;
  }
}

export default HtmlCheck;

//Some Code not able to detech
