/** Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
  const res = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') res.push('[.]');
    else res.push(address[i]);
  }
  return res.join('');
};