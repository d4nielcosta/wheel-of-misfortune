import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './index.css';

interface ChipData {
    key: string;
    label: string;
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const [chips, setChips] = React.useState<any[]>([]);
    const [nameToAdd, setNameToAdd] = React.useState(String);
    const [namePicked, setNamePicked] = React.useState(String);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const onKeyPress = (key: React.Key) => {
        console.log(nameToAdd);
        if (key === 'Enter') {
            setChips((chips) => {
                return [...chips, { key: nameToAdd, label: nameToAdd }];
            });
            setNameToAdd("");
        }

    }

    const pickAName = () => {
        setNamePicked(chips[Math.floor(Math.random() * chips.length)].label);
    };

    return (
        <div>
            <hr className="marginedHR" />

            <TextField id="namesInput" variant="filled" label="Enter name" color="secondary" value={nameToAdd} onChange={e => setNameToAdd(e.target.value)} onKeyPress={e => onKeyPress(e.key)} />

            <Paper id="chipsPaper"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >

                {chips.map((data) => {

                    return (
                        <ListItem key={data.key}>
                            <Chip
                                label={data.label}
                                color='secondary'
                                avatar={<Avatar>{data.label[0]}</Avatar>}
                                onDelete={handleDelete(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>

            <hr className="marginedHR" />
            <Button variant="contained" size="large" onClick={pickAName}> Pick a Name </Button>
            <div className='centreGridCell'>
                <h1 id='pickedName'>{namePicked}</h1>
            </div>

        </div >
    );
}