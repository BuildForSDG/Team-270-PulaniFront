import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const PulaniTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#865115'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

export const layoutStyle = makeStyles(
  () => ({
    /* Overidding ra-layout styling
     * Ref: ra-ui-materialui/src/layout/Layout.js
     */
    root: {
      '& header': {
        '& p[class*=title]': {
          fontSize: '1.15rem'
        }
      },
      '& main': {
        '& > [class*=content]': {
          '& [class*=toolbar]': {
            '& [class*=button]': {
              '&:not([class*=deleteButton])': {
                '&:hover, &:focus': {
                  color: '#865115 !important',
                  backgroundColor: 'rgba(63, 81, 181, 0.08) !important'
                }
              }
            }
          },
          '& [class*=main]': {
            '& [class*=table]': {
              '& > [class*=thead]': {
                '& [class*=headerCell]': {
                  fontWeight: 'bold'
                }
              },
              '& > [class*=tbody]': {
                '& td[class*=rowCell]': {
                  '& > a[class*=link]': {
                    color: '#865115',
                    '&[role=button]': {
                      '&:hover, &:focus': {
                        backgroundColor: 'rgba(63, 81, 181, 0.08) !important'
                      }
                    }
                  },
                  '& > a[class*=button]': {
                    '&:hover, &:focus': {
                      color: '#865115 !important',
                      backgroundColor: 'rgba(63, 81, 181, 0.08) !important'
                    }
                  }
                },
                '& > [class*=clickableRow]': {
                  '&[class*=hover]': {
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.07)'
                    }
                  }
                }
              }
            },
            '& [class*=scroller]': {
              '& > span[class*=indicator]': {
                backgroundColor: '#865115 !important'
              }
            }
          },
          '& form': {
            '& [class*=toolbar]': {
              '& [class*=button]': {
                '&:not([class*=deleteButton])': {
                  backgroundColor: '#865115 !important',
                  color: '#eff0f1 !important',
                  '&:hover, &:focus, &:active': {
                    backgroundColor: '#865115 !important',
                    color: '#eff0f1 !important'
                  }
                }
              }
            },
            '& [class*=filter-field]': {
              '& [class*=input]': {
                '& > label[class*=formControl]': {
                  '&:not([class*=error])': {
                    color: '#865115'
                  }
                },
                '& > div[class*=formControl]': {
                  '& [class*=error]': {
                    '&:after': {
                      borderBottomColor: '#865115'
                    }
                  },
                  '&:after': {
                    borderBottomColor: '#865115'
                  }
                }
              }
            },
            '& > [class*=content]': {
              '& [class*=container]': {
                '&[role=combobox]': {
                  display: 'inline-flex'
                }
              },
              '& > span': {
                '&:nth-child(4)': {
                  '& > div[class*=input]': {
                    '& > div': {
                      '&:nth-of-type(4), &:nth-of-type(5)': {
                        '& > div': {
                          width: 472
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }),
  { name: 'PulaniLayout' }
);

export const loginStyle = makeStyles(
  () => ({
    /* Overidding ra-login styling
     * Ref: ra-ui-materialui/src/auth/Login.tsx
     */
    login: {
      backgroundPosition: 'top center',
      '& [class*=card]': {
        marginTop: '9.5em'
      },
      backgroundImage:
        'radial-gradient(circle at 50% 14em, rgba(167,167,173,1) 0%, rgba(134,81,21,0.958420868347339) 50%, rgba(134,81,21,1) 100%)',
      '& [class*=underline]': {
        '&:not([class*=error])': {
          '&:after': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
          }
        },
        '&:hover, &:focus, &:active': {
          '&:not([class*=disabled])': {
            '&:before, &:after': {
              borderBottomColor: '#865115'
            }
          }
        }
      },
      '& label[class*=error]': {
        color: '#f44336'
      }
    }
  }),
  { name: 'PulaniLogin' }
);

export const appBarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    color: theme.palette.white
  },
  spacer: {
    flex: 1
  },
  appBar: {
    background: '#865115',
    color: '#fff'
  }
}));
