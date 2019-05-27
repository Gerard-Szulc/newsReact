
import React, {Component} from "react";
import GridListItem from "@material-ui/core/GridListTile/index";
import InfoIcon from '@material-ui/icons/Info';
import GridListTileBar from "@material-ui/core/GridListTileBar/index";
import IconButton from "@material-ui/core/IconButton/index";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        // paddingBottom: theme.spacing.unit * 2
    },
    component: {
        width: '19%',
        height: '200px',
    }
});

class Article extends Component {
    render() {
        const {classes} = this.props
        return (
                <GridListItem className={classes.component}>
                    {this.props.articleImg !== null ? (
                        <img
                            className={"articleImage"}
                            srcSet={`${this.props.articleImg},
                                                ${process.env.PUBLIC_URL}/loading_icon.gif`}
                            src={`${process.env.PUBLIC_URL}/loading_icon.gif`}
                            alt={this.props.article.title.slice(0, 15)}
                        />
                    ) : (
                        <img
                            className={"articleImage"}
                            src={process.env.PUBLIC_URL + "/news.jpg"}
                            alt={this.props.article.title.slice(0, 15)}
                        />
                    )}

                    <GridListTileBar
                        title={this.props.article.title}
                        subtitle={<span>by: {this.props.article.author}</span>}
                        actionIcon={
                            <a href={this.props.article.url}>
                                <IconButton children={InfoIcon} className={"infoButton"}>
                                    <InfoIcon/>
                                </IconButton>
                            </a>
                        }
                    />
                </GridListItem>
        );
    }
}

export default withStyles(styles)(Article)

