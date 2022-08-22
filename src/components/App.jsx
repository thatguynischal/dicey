import { useState } from 'react'
import { useEffect } from 'react'
import {nanoid} from "nanoid"
import Die from './Die'
import Confetti from 'react-confetti'
import{GiSurprisedSkull} from 'react-icons/gi'
export default function App(){

    const [dice, setDice]= useState(allNewDice())
    const [tenzie, setTenzie]= useState(false)
    const[count, setCount]= useState(0)

    useEffect(() => {
        const allHeld = dice.every(zzz => zzz.isHeld)
        const firstValue= dice[0].value
        const sameVlaue= dice.every(zzz => zzz.value === firstValue)
        if(allHeld && sameVlaue){
            setTenzie(true)
            console.log("You da best music.")
        }
    }, [dice])


    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function handleClick(){
        setCount(count + 1 )
        tenzie ? refreshPage(): setDice(oldDice => oldDice.map(sxs =>{
            return sxs.isHeld ?
            sxs :
            {value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        }))
    }
 
    function refreshPage(){
        window.location.reload(false)
    }

    function holdDice(id){
       setDice(oldDice => oldDice.map(sxs => {
            return sxs.id === id ?
            {...sxs, isHeld: !sxs.isHeld}:
            sxs
        }))
      
    }

    const diceElements = dice.map(pv => <Die key={pv.id} 
        onClick={() => holdDice(pv.id)} 
        value={pv.value}  
        isHeld={pv.isHeld}
        />)
    
    return(
        <>
        <main>
            {tenzie && <Confetti />}
            <div className='text-part'><h1><GiSurprisedSkull className='skull' /></h1>
            <p>Roll everytime till you get the same freaking numbers.</p>
            </div>
            <div className='dice-container'>
            {diceElements}
            </div>
           <button className='btn' onClick={handleClick}>{tenzie ? "New Game" : "Roll"}</button>
           <h3>You've rolled {count} times.</h3>
           
        </main>
        
        </>
    )
}