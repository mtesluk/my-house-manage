class UtilService {
  static tableName = 'temperatures';

  static getSingleQuerySelect(tableName, roomNumber, limit = 1) {
    return `
          (SELECT *
            FROM ${tableName}
            WHERE type = ${roomNumber}
            ORDER BY date DESC
            LIMIT ${limit})
    `
  }

  static formatSelectQueryAllTypes(roomTypes, limit = 1) {
    let query = [];
    Object.values(roomTypes).forEach(roomNumber => {
      const singleQueryStr = UtilService.getSingleQuerySelect(UtilService.tableName, roomNumber, limit);
      query.push(singleQueryStr);
    });
    const queryStr = query.join(' UNION ');
    return queryStr;
  }
}

module.exports = UtilService
