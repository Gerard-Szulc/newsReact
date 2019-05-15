import React, {Component} from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

 class CountryContentSelect extends Component {

    render(){
        const { classes } = this.props;

        return(
            <form onSubmit={this.props.handleSelectSubmit} >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="source-country-simple">Source Country</InputLabel>
                    <Select
                        value={this.props.selectValue}
                        onChange={this.props.handleSelectChange}
                        inputProps={{
                            name: 'Source Country',
                            id: 'source-country-simple',
                        }}
                    >
                        <MenuItem value={'us'}>USA</MenuItem>
                        <MenuItem value={'pl'}>Poland</MenuItem>
                        <MenuItem value={'de'}>Germany</MenuItem>
                        <MenuItem value={'gb'}>England</MenuItem>
                    </Select>
                </FormControl>
            </form>
        )
}
}
export default withStyles(styles)(CountryContentSelect)
