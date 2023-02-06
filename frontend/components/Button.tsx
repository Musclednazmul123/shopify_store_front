
interface Props {
    title: string;
    action: () => void;
  }

export const Button =({title, action}:Props)=>{

    return <>
    
        <button onClick={action} >{title}</button>
    
    </>
}