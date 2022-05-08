import react from 'react';
import {fireEvent, queryAllByTestId, render} from "@testing-library/react"
import "@testing-library/jest-dom"

import TodoEntry from "./components/TodoEntry"
import App from "./App"
import { StoreContextProvider } from './store/storeContext';

test('test if todoTitle  is empty',()=>{
    const {getByTestId}=render(<TodoEntry/>)
    const todoTitle=getByTestId("todoTitle")
    expect(todoTitle.value).toBe("")

})
test('test if todoDescription  is empty',()=>{
    const {getByTestId}=render(<TodoEntry/>)
    const todoDesc=getByTestId("todoDescription")
    expect(todoDesc.value).toBe("")

})

test("Enter a todo and remove it",()=>{
    const {getByTestId,queryAllByTestId}=render(<StoreContextProvider><App/></StoreContextProvider>)

    const todoTitle=getByTestId("todoTitle")
    const todoDesc=getByTestId("todoDescription")
    const addBtn=getByTestId("todoAddBtn")

    // Add a todo
    fireEvent.change(todoTitle,{target:{value:"First Todo Title"}})
    fireEvent.change(todoDesc,{target:{value:"First Todo Description"}})
    fireEvent.click(addBtn)
    let todoItems=queryAllByTestId("todoItem")
    expect(todoItems.length).toBe(1)

    // Complete a todo
    const completedBtn=getByTestId("completedButton")
    todoItems=getByTestId("todoItem")
    // console.log(todoItems.firstChild.className)
    expect(todoItems.firstChild.className).toBe("")
    fireEvent.click(completedBtn)
    todoItems=getByTestId("todoItem")
    expect(todoItems.firstChild.className).toBe("completed")



    // Remove a todo
    const removeBtn=getByTestId("removeButton")
    fireEvent.click(removeBtn)
    todoItems=queryAllByTestId("todoItem")
    // console.log(todoItems)

    expect(todoItems.length).toBe(0)



    
})