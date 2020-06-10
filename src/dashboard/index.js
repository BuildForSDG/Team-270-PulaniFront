import React from 'react';
// import ChartistGraph from 'react-chartist';

import Icon from '@material-ui/core/Icon';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Store from '@material-ui/icons/Store';
// import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
// import ArrowUpward from '@material-ui/icons/ArrowUpward';
// import AccessTime from '@material-ui/icons/AccessTime';
// import Accessibility from '@material-ui/icons/Accessibility';
// import BugReport from '@material-ui/icons/BugReport';
// import Code from '@material-ui/icons/Code';
// import Cloud from '@material-ui/icons/Cloud';

import { 
  Card,
  CardIcon,
  CardHeader,
  // CardBody,
  CardFooter,
  // Danger,
  GridContainer, 
  GridItem
} from '../layout';

// import Table from 'components/Table/Table.js';
// import Tasks from 'components/Tasks/Tasks.js';
// import CustomTabs from 'components/CustomTabs/CustomTabs.js';

// import { bugs, website, server } from 'variables/general.js';

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart
// } from 'variables/charts.js';

import { dashboardStyle } from '../assets/jss';

export const Dashboard = () => {
  const classes = dashboardStyle();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color='success' stats icon>
              <CardIcon color='success'>
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Income</p>
              <h3 className={classes.cardTitle}>UGX. 50,000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Daily Income
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color='warning' stats icon>
              <CardIcon color='warning'>
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Savings</p>
              <h3 className={classes.cardTitle}>UGX. 500,000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Annual Savings
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color='danger' stats icon>
              <CardIcon color='danger'>
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Expenses</p>
              <h3 className={classes.cardTitle}>UGX. 75,000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Monthly Expenses
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/*<GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='success'>
              <ChartistGraph
                className='ct-chart'
                data={dailySalesChart.data}
                type='Line'
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{' '}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='warning'>
              <ChartistGraph
                className='ct-chart'
                data={emailsSubscriptionChart.data}
                type='Bar'
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='danger'>
              <ChartistGraph
                className='ct-chart'
                data={completedTasksChart.data}
                type='Line'
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title='Tasks:'
            headerColor='primary'
            tabs={[
              {
                tabName: 'Bugs',
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: 'Website',
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: 'Server',
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color='warning'>
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor='warning'
                tableHead={['ID', 'Name', 'Salary', 'Country']}
                tableData={[
                  ['1', 'Dakota Rice', '$36,738', 'Niger'],
                  ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                  ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                  ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>*/}
    </div>
  );
}
