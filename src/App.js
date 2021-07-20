import React, { useState } from 'react';

const App = () => {
    const [dataList, setDataList] = useState([]);
    const [element, setElement] = useState({
        name: '',
        done: false,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setElement(prevState => ({
            ...prevState,
            [name]: value,
        }));
        console.log(e);
    };

    const createElement = () => {
        console.log(element, 'elementttt');
        console.log('createelemenet function');
        setDataList(dataList.concat(element));
        setElement({ name: '', donde: false });
        console.log(dataList);
    };

    const styleDone = val => {
        console.log(val.name);
        setDataList(
            dataList.filter(v => {
                return v.name !== val.name;
            })
        );
    };

    return (
        <div>
          <h2>To do List</h2>
            <input
                type="text"
                name="name"
                value={element && element.name}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    createElement();
                }}
            >
                Click here
            </button>
            <ul>
                {dataList.map((val, ind, arr) => {
                    return (
                        <li key={ind}>
                            <i>{val.name}</i>
                            {'  '}
                            <button
                                onClick={() => {
                                    styleDone(val);
                                }}
                            >
                                completed
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
