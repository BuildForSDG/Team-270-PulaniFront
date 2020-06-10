import React from 'react';
import format from 'date-fns/format';
import ChartistGraph from 'react-chartist';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Store from '@material-ui/icons/Store';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';

import { 
  Card,
  CardIcon,
  CardHeader,
  CardBody,
  CardFooter,
  GridContainer, 
  GridItem,
  // charts
  dailySalesChart,
  savingsTrendsChart,
  budgetTrackerChart  
} from '../layout';

import { dashboardStyle } from '../assets/jss';

export const Dashboard = () => {
  const classes = dashboardStyle();

  let firstName = sessionStorage.getItem('firstName'),
       lastName = sessionStorage.getItem('lastName');  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardBody color='success'>
              <h2 className={classes.cardTitle}>
                Hi, {firstName}&nbsp;{lastName} 
                <span className={clsx('date')}>{format(new Date(), 'MMMM, DD')}</span>
              </h2>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color='success' stats icon>
              <CardIcon color='success'>
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Income Goal</p>
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
              <p className={classes.cardCategory}>Savings Target</p>
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
              <p className={classes.cardCategory}>Budget Limit</p>
              <h3 className={classes.cardTitle}>UGX. 75,000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Monthly Budget
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
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
              <h4 className={classes.cardTitle}>Your daily sales</h4>
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
                data={savingsTrendsChart.data}
                type='Bar'
                options={savingsTrendsChart.options}
                responsiveOptions={savingsTrendsChart.responsiveOptions}
                listener={savingsTrendsChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Your savings trends</h4>
              <p className={classes.cardCategory}>last year&rsquo;s performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated last year
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color='danger'>
              <ChartistGraph
                className='ct-chart'
                data={budgetTrackerChart.data}
                type='Line'
                options={budgetTrackerChart.options}
                listener={budgetTrackerChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Your tracked expenses</h4>
              <p className={classes.cardCategory}>last month trends</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated last week
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
