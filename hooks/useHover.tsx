import { useState, useRef, useEffect} from 'react'

const useHover = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);

    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node: any = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
  
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref.current] // Recall only if ref changes
    );
  
    return [ref, value];
}

export default useHover