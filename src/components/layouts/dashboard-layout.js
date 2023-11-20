import { Grid, Col, Paper } from '@mantine/core';
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Grid style={{width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Col span={3} style={{ height: '100%', position: 'fixed', overflow: 'auto' }}>
        <Paper padding="md" shadow="xs">
          <Sidebar />
        </Paper>
      </Col>
      <Col span={9} offset={2.5} style={{ overflowY: 'auto', padding: '16px 24px' }}>
        {children}
      </Col>
    </Grid>
  );
}
