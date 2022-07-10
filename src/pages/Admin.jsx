import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

export default function Admin() {
    const classes = useStyles();
    const [data, setData] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let token = localStorage.getItem("userToken");
            let result = await axios.get(
                process.env.REACT_APP_BACKEND_URL + "/api/order/all"
                ,
                {
                    headers: {
                        "x-access-token": token,
                    },
                }
            );
            if (result.data) {
                setData(result.data);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleAccept = async (name) => {
        try {
            let token = localStorage.getItem("userToken");
            let result = await axios.post(
                process.env.REACT_APP_BACKEND_URL + "/api/user/verify",
                {
                    username: name,
                },
                {
                    headers: {
                        "x-access-token": token,
                    },
                }
            );
            if (result.data.ok === 1) {
                alert("Successfully Accepted");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleDelete = async (id) => {
        let result = await axios.post(
            process.env.REACT_APP_BACKEND_URL + "/api/order/delete",
            {
                _id: id,
            }
        );
        if (result.data.ok === 1) {
            getData();
            alert("Successfully deleted");
        }
        if (result) {
            console.log(result);
        }
    };

    return (
        <div className="container" style={{ marginTop: "140px" }}>
            <TableContainer component={Paper}>
                <Table
                    stickyHeader
                    className={classes.table}
                    aria-label="sticky table"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">
                                Country
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Front Image
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Back Image
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Face Image
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Action
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data !== null
                            ? data.map((row, index) => (
                                  <StyledTableRow key={index}>
                                      <StyledTableCell
                                          component="th"
                                          scope="row"
                                      >
                                          {row.country}
                                      </StyledTableCell>
                                      <StyledTableCell align="right">
                                          <div className="image_set">
                                              <img
                                                  src={
                                                    process.env.REACT_APP_BACKEND_URL +
                                                      row.frontImage
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </StyledTableCell>
                                      <StyledTableCell align="right">
                                          <div className="image_set">
                                              <img
                                                  src={
                                                    process.env.REACT_APP_BACKEND_URL + 
                                                      row.backImage
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </StyledTableCell>
                                      <StyledTableCell align="right">
                                          <div className="image_set">
                                              <img
                                                  src={
                                                    process.env.REACT_APP_BACKEND_URL + 
                                                      row.faceImage
                                                  }
                                                  alt=""
                                              />
                                          </div>
                                      </StyledTableCell>
                                      <StyledTableCell align="right">
                                          <div className="actionButton">
                                              <Button
                                                  variant="contained"
                                                  color="primary"
                                                  onClick={() =>
                                                      handleAccept(row.userName)
                                                  }
                                              >
                                                  Accept
                                              </Button>
                                              <Button
                                                  variant="contained"
                                                  color="secondary"
                                                  onClick={() =>
                                                      handleDelete(row._id)
                                                  }
                                              >
                                                  Delete
                                              </Button>
                                          </div>
                                      </StyledTableCell>
                                  </StyledTableRow>
                              ))
                            : "Loading..."}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
