import React from "react";
import { Tablediv, TableBody, TableTitle, Table } from "./TableStyles";

const Tables = ({ adduser }) => {
  return (
    <Tablediv>
      {" "}
      {adduser.length > 0 ? (
        <Table>
          <TableTitle>
            <tr>
              <th>Mr/Mrs/Miss</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Login</th>
            </tr>
          </TableTitle>
          <TableBody>
            {adduser.map((user) => {
              return (
                <tr key={user.name}>
                  <td>{user.title}</td>
                  <td>
                    {user.first} + " " + {user.last}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.country}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </TableBody>
        </Table>
      ) : null}
    </Tablediv>
  );
};

export default Tables;
