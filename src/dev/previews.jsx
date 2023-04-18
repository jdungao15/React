import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import ExpenseItem from "../components/Expenses/ExpenseItem";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExpenseItem">
                <ExpenseItem/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews