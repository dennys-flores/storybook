import { Table } from './Table';

export default {
  title: 'Examen/Table',
  component: Table,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  filas: 3,
  columnas: 3,
  Headers: ["Primera Columna A","Segunda Columna B","Tercera Columna C"]
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: true,
    filas: 3,
    columnas: 3,
    Headers: ["Primera Columna A","Segunda Columna B","Tercera Columna C"]
};
