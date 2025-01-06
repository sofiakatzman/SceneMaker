import React, { useEffect, useState } from "react"

function Timer({ setIsGameOver, isGameOver }) {
    const [time, setTime] = useState(10)

    useEffect(() => {
        if (isGameOver) return

        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1)
            }, 1000)

            return () => clearInterval(timer)
        } else {
            setIsGameOver(true)
        }
    }, [time, isGameOver, setIsGameOver])

    return (
        <div>
            <h1>Time Remaining: {time}s</h1>
        </div>
    )
}

export default Timer