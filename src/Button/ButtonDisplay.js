import Button from "./Button.js"

const ButtonDisplay = ({btn1,btn2,btn3}) => {
    return(
        <div>
            <Button btnName={btn1}/>
            <Button btnName={btn2}/>
            <Button btnName={btn3}/>
         </div>
    )
}
export default ButtonDisplay