import * as fs from "fs";
import pkg from 'docx';
const { Document, OverlapType, BorderStyle, RelativeHorizontalPosition, RelativeVerticalPosition, TableAnchorType, TableLayoutType, Packer, WidthType, TextRun, HeadingLevel, AlignmentType, Paragraph, Table, TableCell, TableRow } = pkg;

let table1 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Seq",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 7,
                        type: WidthType.PERCENTAGE,
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Field Name",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 21,
                        type: WidthType.PERCENTAGE,
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Description",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 42,
                        type: WidthType.PERCENTAGE,
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Type",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 7,
                        type: WidthType.PERCENTAGE,
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Length",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 14,
                        type: WidthType.PERCENTAGE,
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Decimals",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                    width: {
                        size: 14,
                        type: WidthType.PERCENTAGE,
                    },
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "1",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "ID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUSTSID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Status",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUREG",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Reg No",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "15",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "4",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUNAME",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Name",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "50",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "5",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCTID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Type",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "6",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUINID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Industry",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "7",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUFNAM",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Full Name",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "150",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "8",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUR",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Currency",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "5",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "9",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCNID",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Country",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "5",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUNOTE",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Notes",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "150",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "11",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUSR",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Crt User",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCDAT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Crt Date",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "L",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "13",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCTIM",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Crt Time",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "6",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "14",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUUUSR",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Upd User",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "15",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "15",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUUDAT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Upd Date",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "L",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "16",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUUTIM",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Upd Date",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "6",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "16",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUDUSR",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Dlt User",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "L",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "18",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUDDAT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Dlt Date",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "8",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "19",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUDTIM",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Dlt Time",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "S",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "6",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "20",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "BANKA",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "BANK A/C",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "P",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "15",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "21",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CRG",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CR GUARANTEE",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "10",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "22",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CRLIMIT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CREDIT LIMIT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "P",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "15",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "23",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "BTRANS",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "BANK",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "P",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "9",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "24",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "FOREX",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "FOREX",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "25",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "LANG",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "LANG",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "1",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "26",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "BACKO",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "B/O",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "1",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "27",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "RACCT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "RELATED ACCOUNT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "11",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "28",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SACCT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "STATEMENT ACCOUNT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "11",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "29",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "TERMS",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "TERMS",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "30",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "INT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "INT",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "A",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "0",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
    ],
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
});

let table2 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Seq",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Name",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Source Lib",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Object Lib",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Last Amendment",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Relation",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "1",

                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Country",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CNCNID:CUCNID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Custyp",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CTCTID:CUCTID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "INDUSTRY",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "ININID:CUINID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
    ],
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
});

let table3 = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Seq",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Name",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Source Lib",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Object Lib",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Last Amendment",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Relation",
                            heading: HeadingLevel.HEADING_4,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "1",

                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Address",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUID:CACUID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "2",

                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Contract",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUID:COCUID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "3",

                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Contact",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUID:CCCUID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "4",

                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Job",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "SPHAN01",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "12th Jan 2020",
                            bold: true,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "CUCUID:JOCUID",
                            bold: true,
                        }),
                    ],
                }),
            ],
        }),
    ],
    width: {
        size: 100,
        type: WidthType.PERCENTAGE,
    },
});

let table4 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 1500,
        absoluteVerticalPosition: 4200,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // layout: TableLayoutType.FIXED,
});

let table5 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 1500,
        absoluteVerticalPosition:11500,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table6 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 5000,
        absoluteVerticalPosition: 6500,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table7 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 5000,
        absoluteVerticalPosition: 10000,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table8 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 9000,
        absoluteVerticalPosition: 2500,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table9 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 9000,
        absoluteVerticalPosition: 5000,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table10 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 9000,
        absoluteVerticalPosition: 10000,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});

let table11 = new Table({
    columnWidths: [1000, 1000],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "COUNTRY",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                   
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Countries",
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                    columnSpan: 2,
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNCNID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "ID"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSTSID"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Status"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNNAME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Name"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNINTCODE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Dial Code"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Time"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNSUMDATE"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Sum Date"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
        new TableRow({
            children: [
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "CNWINTIME"
                        }),
                    ],
                }),
                new TableCell({
                    width: {
                        size: 1000,
                        type: WidthType.DXA,
                    },
                    children: [
                        new Paragraph({
                            text: "Win Time"
                        }),
                    ],
                }),
            ],
            cantSplit: true,
        }),
    ],
    float: {
        horizontalAnchor: TableAnchorType.PAGE,
        verticalAnchor: TableAnchorType.PAGE,
        absoluteHorizontalPosition: 7500,
        absoluteVerticalPosition: 13000,
        overlap: OverlapType.OVERLAP,
        leftFromText: 1000,
        rightFromText: 2000,
        topFromText: 1500,
        bottomFromText: 3000,
    },
    borders: {
        top: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        bottom: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        left: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
        right: {
            style: BorderStyle.THREE_D_ENGRAVE,
            size: 3,
            color: "072227",
        },
    },
    // height: 70,
    // layout: TableLayoutType.FIXED,
});


let doc = new Document({
    sections: [
        {
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Design Doc – Relationship with Main Entity",
                            bold: true
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.HEADING_3,
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Main Entity:    ",
                            bold: true
                        }),
                        new TextRun({
                            text: "CUSTOMER",
                            color: "9A9483",
                        }),
                    ],
                    heading: HeadingLevel.HEADING_3,
                }),
                table4,
                table5,
                table6,
                table7,
                table8,
                table9,
                table10,
                table11,
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Entity and its relationships",
                            bold: true
                        }),
                    ],
                    pageBreakBefore: true,
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.HEADING_3,
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Entity Layout:  ",
                            bold: true
                        }),
                        new TextRun({
                            text: "CUSTOMER",
                            color: "9A9483",
                        }),
                    ],
                    heading: HeadingLevel.HEADING_3,
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                table1,
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Parents Entities:	",
                            bold: true
                        }),
                        new TextRun({
                            text: "	CUSTOMER\n \n",
                            color: "9A9483",
                        })
                    ],
                    pageBreakBefore: true,
                    heading: HeadingLevel.HEADING_3,
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                table2,
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Child Entities:	",
                            bold: true
                        }),
                        new TextRun({
                            text: "	CUSTOMER\n \n",
                            color: "9A9483",
                        })
                    ],
                    heading: HeadingLevel.HEADING_3,
                    // pageBreakBefore: true,
                }),
                new Paragraph({
                    text: "\n \n",
                }),
                table3,
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});