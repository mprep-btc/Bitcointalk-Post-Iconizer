// ==UserScript==
// @name        Bitcointalk Post Iconizer - Altcoin Pack
// @namespace   mprep
// @description Add buttons for inserting altcoin symbols
// @include     https://bitcointalk.org/index.php?action=post;*
// @include     https://bitcointalk.org/index.php?action=pm;sa=send*
// @version     0.11
// @downloadURL   https://raw.githubusercontent.com/mprep-btc/Bitcointalk-Post-Iconizer/master/plugins/altcoinIcons.js
// @grant       none
// ==/UserScript==

addInserter('data:image/gif;base64,R0lGODlhFwAXAPcAAAAAAEZBLVZPM1xVNF9WNWtiQn1qRoBuNpR1NJV3NJV4OKODM6WCM6aPMaWONaeIPaSPP6iIO6eQMKaQNqaQOKWQOaWQOqWQO6aRP6qSMaqTM6iRNa2UMbSTM7WXN7GTPLaSPbWUPrGYMrWbMrWaNbacMracM7edNbiYNbidM7meM7ycNr2fOrydPLugN7uhOLyjPLyjPpmLWqeURqqXS6qYTaybUq2bU66dVq+bXruZQbybRrmfSrKdU76lSLilW7Wmarana7anbraobbmsdbyud7yvebyvfL2wfcCaPMGgN8CjTsGpTcKiVcWnV8etUs+0X9C2X8aqYcOubcisYM62Zs28fNC3aNG5atK6a9C7btK8b9e9a9m/a9C8cNO8cdW/ctbBcdbActbBddbCdtLCe9jBc9vCctvHe9jEfNvIfNzJfd3Kft/Kf+XLeriukbivl8C0g8C0hMK2h8G2iMa8kMe8ksy8mdTCgNrGgt7LgN/MgN7Mh97MiNjHkdnFlNjJld/Nlt/OnN/RkszEq+DNgeDMiOHSj+bTmOTZnenUluLUo+XWpuDVr+TXqOTXq+bbtubbt+fcsubZuOTZuubbuOXZvubbvOfbveTavufbv+rdtufcwOXcweLayOHcy+nfxePe0OTf0ungw+jgyuvjyOnhzevjz+zkyeng0+vj0Orl1uzk0u7m1O7m1e/n1u/o0e/o1u7p2vDn1vDo1/Lp2PDq2PLq2vPr2/Ls2/Pu3/Tu2/Xu3PXv3vXv3/bw4Pfy4/jz5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAXABcAAAj/AP8JHEiwoMGDCBMmtGPjggUMQRQWRNLAg4qLF0VAkPivRgkVOzpgTPFhAQc5CWlg1JFEyQoUDBQgUCGCzkEiJlRYydSJkyZNlu4YSHAxw0EJKk4IcoWradNXn6ZgxFFwzkUfi96omuUJDqZbuFIxuaih4IyLZfpIAWaK0IEvsGzRAnTRREEKL2IkGhBA1i9KafpICsbqEkYkBCeogDGIgABdwVD16eMoWCxQKS4SIVhBhYtDMgp8CtWJj6FNuW5NInExDsEbF8O0ySFqVak8ina1wvWHhYoRBnM+CTQqWLBeo3j5OlXLSQsVGww6UBGFkfHrwYCR8pMlhAogB0V0TEEEqVGjSpUiPcKzZguICQiHnHHDZUkVM2bAjNnDpkkEhUVgAcUVZohBhh6FFELFAxz90wMPWqBRiBpe/CBEgwPVYQQRR2Do4YcSBQQAOw==',

'Ð',

'Dogecoin');

addInserter('data:image/gif;base64,R0lGODlhFwAXAPcAAAAAAGRkY2ZmZWdnZ2tra2xsbG1tbW9vbnBwcHNzcnNzc3R0c3Z2dXZ2dnh4eHp6eXp6enx8e3x8fH5+fYCAf4GBgYKCgYKCgoODg4SEhIWFhYaGhoiIh4mJiImJiYuLi4yMi4yMjI2NjY6OjY6Ojo+Pj5CQkJKSkZKSkpSUlJWVlZeXlpeXl5iYl5qampycnJ2dnZ6enp+fn6CgoKGhoaKioaKioqOjo6Sko6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK6urq+vr7CwsLGxsbOzsrOzs7S0tLW1tba2tri4uLm5ubq6ur29vL6+vr+/v8DAwMHBwcLCwsTExMXFxcbGxsjIx8jIyMnJycrKycvLyszMy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dPT09XV1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N7e3t/f3+Dg4OHh4eTk5Ofn5+np6ezs7O3t7e7u7u/v7/Dw8PLy8vPz8/T09Pf39/j4+Pn5+fv7+/z8/P39/f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAP8ALAAAAAAXABcAAAj/AP8JHEiwoMGDCBMqXLgwi5YxbMZkycJQ4JUzfwDtsbMn0B8yVxZCsdMnzBAeNlTgEOOnzpOEVejcIeJjxogOHGb8QJJnDhWEYPTsUBFiBBI+U3rIONFjz5aDUfBY6WAChow1gnJM4ACCxZc6TQw2qRODxg4bJPwIcrPkhY4cPOokMRgFzooWHjA0CRRoz4sXJSxkkBO2IJUzER5AeMKHjxcKFSBAsBDijRODTNBIEFEixtcYCxhcUPEixRsjBoW0QaFigwIzcaQoUeIixAQTbXgYRJJGiIECDdQIF+6CQIElZoIcRFJGwwbnEA5IPyAhxRnlB49k4fLBwYAAAhJkNfiAIgyVIglzVAFzowGCChdAABEzxcZCml3AYKGSBUyXHkRU9E8PL9jwQw0w9CDgggw2uGBAADs=',

'Ł',

'Litecoin');