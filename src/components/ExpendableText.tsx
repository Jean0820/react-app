type textType = {
  maxChar: number;
  children: string;
};
const ExpendableText = ({ maxChar, children }: textType) => {
  if (children.length <= maxChar) {
    return children;
  }
  const text = children.substring(0, maxChar);
  return <p>{text}...</p>;
};

export default ExpendableText;
