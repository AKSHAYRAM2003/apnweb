<?php 
$data = "";
$data .= '
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>A simple, clean, and responsive HTML invoice template</title>
    <style>
        .rwd-table {
            margin: 1em 0;
            min-width: 300px;
        }
        .rwd-table tr {
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            text-align: center;
        }
        .rwd-table th {
            display: none;
        }
        .rwd-table td {
            display: block;
        }
        .rwd-table td:first-child {
            padding-top: .5em;
        }
        .rwd-table td:last-child {
            padding-bottom: .5em;
        }
        .rwd-table td:before {
            content: attr(data-th) ": ";
            font-weight: bold;
            width: 6.5em;
            display: inline-block;
        }
        @media (min-width: 480px) {
            .rwd-table td:before {
                display: none;
            }
        }
        .rwd-table th, .rwd-table td {
            text-align: left;
        }
        @media (min-width: 480px) {
            .rwd-table th, .rwd-table td {
                display: table-cell;
                padding: .25em .5em;
            }
            .rwd-table th:first-child, .rwd-table td:first-child {
                padding-left: 0;
            }
            .rwd-table th:last-child, .rwd-table td:last-child {
                padding-right: 0;
            }
        }

        td > a {
            color:white !important;
        }

        .rwd-table {
            background: #34495E;
            color: #fff;
            border-radius: .4em;
            overflow: hidden;
        }
        .rwd-table tr {
            border-color: #46637f;
        }
        .rwd-table th, .rwd-table td {
            margin: .5em 1em;
        }
        @media (min-width: 480px) {
            .rwd-table th, .rwd-table td {
                padding: 1em !important;
            }
        }
        .rwd-table th, .rwd-table td:before {
            color: #dd5;
        }
    </style>
</head>
<body>
    <table class="rwd-table" style="width:40%;">
        <tr>
            <th colspan="2" style="text-align:center"> APN DEMO REQUEST MAIL</th>
        </tr>
        <tr>
        <th>Name</th>
            <td data-th="Movie Title">'.$name.'</td>
        </tr>
        <tr>
            <th>Phone</th>
            <td data-th="Movie Title">'.$phone.'</td>
        </tr>
        <tr>
            <th>Email</th>
            <td data-th="Movie Title">'.$email.'</td>
        </tr>
        <tr>
            <th>Subject</th>
            <td data-th="Movie Title">'.$subject.'</td>
        </tr>
        <tr>
            <th>Message</th>
            <td data-th="Movie Title">'.$message.'</td>
        </tr>
    </table>
</body>
</html>';
return $data
?>