import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";

const Cron = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    jobname: "",
    expression: "",
    description: "",
  };

  const userSchema = yup.object().shape({
    //jdbcconn: yup.string().required("required"),
    jobname: yup.string().required("required"),
    expression: yup.string().required("required"),
    description: yup.string().required("required"),
  });

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOption(res.data);
    };
    getDeviceData();
  }, []);

  return (
    <>
      {/* <Box m="76px 20px 20px 235px"> */}
      <Formik
        //onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(data, { resetForm }) => {
          data.counterId = Number(data.counterId);
          //console.log("golmal" + data.counterId);
          console.log(data);
          let formData = new FormData();
          formData.append("counterId", data.counterId);
          formData.append("deviceId", data.deviceId);
          formData.append("macId", data.macId);
          formData.append("deviceTypeId", data.deviceTypeId);

          axios({
            method: "POST",
            url: "http://192.168.29.5:8089/device/add",
            data: data,
          })
            .then(function (res) {
              console.log(res);
              alert("Successfully signed up!");
            })
            .catch(function (res) {
              console.log(res);
            });
          resetForm({ data: "" });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box style={{ margin: "55px 20px 20px 20px" }}>
              <Grid
                container
                //rowSpacing={2}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ margin: "50px, 5px" }}
              >
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="JDBC Connection"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.jdbcconn}
                    name="jdbcconn"
                    error={!!touched.jdbcconn && !!errors.jdbcconn}
                    helperText={touched.jdbcconn && errors.jdbcconn}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Job Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.jobname}
                    name="jobname"
                    error={!!touched.jobname && !!errors.jobname}
                    helperText={touched.jobname && errors.jobname}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Expression"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.expression}
                    name="expression"
                    error={!!touched.expression && !!errors.expression}
                    helperText={touched.expression && errors.expression}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    name="description"
                    error={!!touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box
              display="flex"
              justifyContent="space-evenly"
              mt="20px"
              mr="22px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                Save
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                New
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "8%", borderRadius: "5px" }}
              >
                Delete
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* </Box> */}
    </>
  );
};

export default Cron;
