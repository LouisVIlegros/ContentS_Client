import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from './SearchBar'
import AutocompleteList from './AutocompleteList/AutoCompleteList'


configure({adapter : new Adapter()})
describe('<SearchBar />', ()=> {
    it('should not show any suggestion list before a letter is present inside the input', ()=>{
        const wrapper = shallow(<SearchBar />)

        expect(wrapper.find(AutocompleteList)).toHaveLength(0)

    })
})