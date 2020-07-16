import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Search = ({ placeHolder, btnLabel, onSubmit, onChange }) => (
    <Form inline onSubmit={onSubmit}>
        <Form.Control 
            autoFocus
            type='text' 
            placeholder={placeHolder} 
            style={{minWidth: 300, margin:20}}
            onChange={onChange}
        />
        <Button type='submit'>{btnLabel}</Button>
    </Form>
);

export default Search;

