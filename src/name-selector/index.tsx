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

import { Wheel } from 'react-custom-roulette';

interface WheelData {
    option: string;
}

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const [data, setData] = React.useState<WheelData[]>([]);

    const [nameToAdd, setNameToAdd] = React.useState(String);
    const [deleteOnPickToggle, setDeleteOnPickToggle] = React.useState(true);

    const [mustSpin, setMustSpin] = React.useState(false);
    const [prizeNumber, setPrizeNumber] = React.useState(-1);

    React.useEffect(() => {
        switch(window.location.search) {
            case '?dss':
                setData( [
                    { option: 'Danny' },
                    { option: 'Paddy' },
                    { option: 'Kal' },
                    { option: 'Ross' },
                    { option: 'Callum' },
                    { option: 'JP' },
                ]);
                break;
            default:
                if (window.location.search.startsWith("?")) {
                    const searchNames = (window.location.search).substring(1).split(",");
                    const names = new Array();
                    searchNames.forEach( (name) => {
                        names.push({"option": name});
                    })
                    setData([...names]);
                }
                break;
        }
      }, []);

    const handleDelete = (element: WheelData) => () => {
        if (element) {
            setData((data) => data.filter((e) => e.option !== element.option));
        }
    };

    const onKeyPress = (key: React.Key) => {
        if (key === 'Enter') {
            setData((data) => {
                return [...data, { option: nameToAdd }];
            });
            setNameToAdd("");
        }
    }

    const handleSpinClick = () => {

        let tempData = data;
        if (prizeNumber != -1 && deleteOnPickToggle) {
            tempData = data.filter((e) => e !== data[prizeNumber]);
            setData(tempData);
        }

        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * tempData.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    }

    return (
        <div>
            <hr className="marginedHR" />

            <TextField
                id="namesInput"
                variant="filled"
                label="Enter name"
                color="secondary"
                value={nameToAdd}
                onChange={e => setNameToAdd(e.target.value)} onKeyPress={e => onKeyPress(e.key)}
            />

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

                {data.map((e) => {

                    return (
                        <ListItem key={e.option}>
                            <Chip
                                label={e.option}
                                color='secondary'
                                avatar={<Avatar>{e.option[0]}</Avatar>}
                                onDelete={handleDelete(e)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>

            <hr className="marginedHR" />

            <Grid container>
            <Grid item xs={6}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch />}
                            label="Delete name on getting picked"
                            labelPlacement="start"
                            checked={deleteOnPickToggle}
                            onChange={e => setDeleteOnPickToggle(!deleteOnPickToggle)}
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" size="large" onClick={handleSpinClick}> Pick a Name </Button>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{marginTop: '36px'}}
                >
                <Grid item >
                    {data.length > 1 &&
                    <>
                        <Wheel
                            backgroundColors={['#FD8A8A', '#FFCBCB', '#9EA1D4', '#F1F7B5', '#A8D1D1', '#DFEBEB']}
                            mustStartSpinning={mustSpin}
                            prizeNumber={prizeNumber}
                            data={data}
                            spinDuration={0.4}
                            onStopSpinning={() => {
                                setMustSpin(false);

                            }}
                        />
                    </>
                    }
                    {data.length == 1 && <h1 id='pickedName'>{data[0].option}</h1>}
                </Grid>
            </Grid>

        </div >
    );
}
