import React, {useState} from 'react';
import {data} from '../../../data';

const ErrorExample = () => {
    const [title, setTitle] = useState('random title');
    const [array, setArray] = React.useState(data);

    const handleClick = () => {
        setTitle(`Hello peoples at ${new Date().getTime()}`);
        console.log(title);
    };

    const removeItem = (id) => {
        const result = array.filter(a => a.id !== id);
        setArray(result);
    }

    const updateItem = (id) => {
        let person = {...array.find(a => a.id === id), name: 'NewName'};
        setArray([...array.filter(a => a.id !== id), person]);
    }

    return (
        <React.Fragment>
          <h2>{title}</h2>
          <button type='button' className='btn' onClick={handleClick}>
            change title
          </button>
            <button type='button' className='btn' onClick={() => setArray([...array, {id: new Date().getTime(), name: 'lance'}])}>
                add to array
            </button>
            <div>
                {
                    array.map((val) =>{
                        return (
                            <div key={val.id} className="item">
                                <h4>{val.name}</h4>
                                <button onClick={() => removeItem(val.id)}>Remove</button>
                                <button onClick={() => updateItem(val.id)}>Change Name</button>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default ErrorExample;
