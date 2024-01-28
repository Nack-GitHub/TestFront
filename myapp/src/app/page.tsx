"use client"
import React, { useState, useEffect } from 'react';

interface Button {
  id: number;
  column: number;
  name: string;
  type: string;
}

export default function Home() {

  const [buttons, setButtons] = useState<Button[]>([]);

  useEffect(() => {

    getData()

  }, [])

  const getData = () => {

    let data: Button[] = []
    for (let i = 0; i < dataMock.length; i++) {
      const element = dataMock[i];
      let o: Button = {
        id: i + 1,
        column: 0,
        name: element.name,
        type: element.type
      }
      data.push(o)
    }
    setButtons(data)

  };

  const handleClick = (buttonId: number, name: string, isClicked: boolean = false) => {

    const buttonIndex = buttons.findIndex(button => button.id === buttonId);

    if (isClicked) {
      const updatedButtons = [...buttons];
      updatedButtons[buttonIndex].column = 0;
      setButtons(updatedButtons);
      return
    }

    const updatedButtons = [...buttons];
    updatedButtons[buttonIndex].column = name === "Fruit" ? 1 : 2;
    setButtons(updatedButtons);

    setTimeout(() => {
      const resetButtons = [...buttons];
      resetButtons[buttonIndex].column = 0;
      setButtons(resetButtons);
    }, 5000);

  };

  return (
    <div className="bg-white h-screen flex flex-row p-8">

      <div className="flex flex-col flex-1 ">
        {buttons
          .filter(button => button.column === 0)
          .map(button => (
            <button
              className="bg-slate-200 h-10 flex justify-center items-center text-black border border-zinc-200 mb-2"
              key={button.id} onClick={() => handleClick(button.id, button.type)}>
              {button.name}
            </button>
          ))}
      </div>

      <div className="flex flex-col flex-1 border border-zinc-200 mr-2 ml-4">
        <div className="bg-slate-200 h-10 flex justify-center items-center text-black border border-zinc-200 mb-1">
          Fruit
        </div>
        <div className="pr-2 pl-2 pt-1">
          {buttons
            .filter(button => button.column === 1)
            .map(button => (
              <button
                className="bg-slate-200 h-10 w-full flex justify-center items-center text-black border border-zinc-200 mb-2"
                key={button.id} onClick={() => handleClick(button.id, button.type, true)}>
                {button.name}
              </button>
            ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 border border-zinc-200 ml-2">
        <div className="bg-slate-200 h-10 flex justify-center items-center text-black border border-zinc-200 mb-1">
          Vegetable
        </div>
        <div className="pr-2 pl-2 pt-1">
          {buttons
            .filter(button => button.column === 2)
            .map(button => (
              <button
                className="bg-slate-200 h-10 w-full flex justify-center items-center text-black border border-zinc-200 mb-2"
                key={button.id} onClick={() => handleClick(button.id, button.type, true)}>
                {button.name}
              </button>
            ))}
        </div>
      </div>

    </div>
  )
}


const dataMock = [
  {
    type: 'Fruit',
    name: 'Apple',
  },
  {
    type: 'Vegetable',
    name: 'Broccoli',
  },
  {
    type: 'Vegetable',
    name: 'Mushroom',
  },
  {
    type: 'Fruit',
    name: 'Banana',
  },
  {
    type: 'Vegetable',
    name: 'Tomato',
  },
  {
    type: 'Fruit',
    name: 'Orange',
  },
  {
    type: 'Fruit',
    name: 'Mango',
  },
  {
    type: 'Fruit',
    name: 'Pineapple',
  },
  {
    type: 'Vegetable',
    name: 'Cucumber',
  },
  {
    type: 'Fruit',
    name: 'Watermelon',
  },
  {
    type: 'Vegetable',
    name: 'Carrot',
  },
]
