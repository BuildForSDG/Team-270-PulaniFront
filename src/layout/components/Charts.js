// javascript library for creating charts
import Chartist from 'chartist';

// variables used to create animation on charts
let delays = 80,
  durations = 500;
let delays2 = 80,
  durations2 = 500;

// Daily Sales

export const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};

// Savings Trends

export const savingsTrendsChart = {
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    series: [[42, 85, 85, 85, 138, 181, 181, 215, 215, 225, 281, 366]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 500,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === 'bar') {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};

// Budget Management

export const budgetTrackerChart = {
  values: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [[20, 35, 55, 40]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 75,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(values) {
      if (values.type === 'line' || values.type === 'area') {
        values.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: values.path
              .clone()
              .scale(1, 0)
              .translate(0, values.chartRect.height())
              .stringify(),
            to: values.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (values.type === 'point') {
        values.element.animate({
          opacity: {
            begin: (values.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    }
  }
};
