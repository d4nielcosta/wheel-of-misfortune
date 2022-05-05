import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import './index.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

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
    const [deleteOnPickToggle, setDeleteOnPickToggle] = React.useState(false);
    const [namePicked, setNamePicked] = React.useState<ChipData | undefined>();

    const handleDelete = (chipToDelete: ChipData) => () => {
        if (chipToDelete) {
            setChips((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        }
    };

    const onKeyPress = (key: React.Key) => {
        if (key === 'Enter') {
            setChips((chips) => {
                return [...chips, { key: nameToAdd, label: nameToAdd }];
            });
            setNameToAdd("");
        }

    }

    const pickAName = () => {
        let pickedName = chips[Math.floor(Math.random() * chips.length)];
        setNamePicked(pickedName);
        if (deleteOnPickToggle) {
            setChips((chips) => chips.filter((chip) => chip.key !== pickedName.key));
        }
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

            <Grid container>
            <Grid item xs={6}>
                    <FormGroup>
                        <FormControlLabel control={<Switch />} label="Delete name on getting picked" labelPlacement="start" checked={deleteOnPickToggle} onChange={e => setDeleteOnPickToggle(!deleteOnPickToggle)} />
                    </FormGroup>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" size="large" onClick={pickAName}> Pick a Name </Button>
                </Grid>
                
            </Grid>
            <div className='centreGridCell'>

                <h1 id='pickedName'>{namePicked ? namePicked.label : ""}</h1>
            </div>

        </div >
    );
}