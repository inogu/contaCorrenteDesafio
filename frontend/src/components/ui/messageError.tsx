import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export type AlertComponentProps = {
  message: string;
  visible: boolean;
};

export default function ErrorAlert(props: AlertComponentProps) {
  const classes = useStyles();

  if (props.visible)
    return (
      <div className={classes.root}>
        <Alert severity="error">{props.message}</Alert>
      </div>
    );
  else return <div></div>;
}
