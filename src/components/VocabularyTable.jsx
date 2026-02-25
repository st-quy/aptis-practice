// src/components/VocabularyTable.jsx

export const VocabularyTable = ({ title, data, tableType = 'two-column' }) => {
  if (tableType === 'places') {
    return (
      <div className="vocab-table-card">
        <h3>{title}</h3>
        <table>
          <thead>
            <tr>
              <th>Phân biệt</th>
              <th style={{ paddingLeft: '40px', paddingRight: '40px' }}>Tiếng Anh</th>
              <th>Tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((group, groupIdx) => (
              group.items.map((item, itemIdx) => (
                <tr key={`${groupIdx}-${itemIdx}`}>
                  {itemIdx === 0 && (
                    <td rowSpan={group.items.length} className="category-cell">
                      {group.category}
                    </td>
                  )}
                  <td>{item.en}</td>
                  <td>{item.vi}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (tableType === 'description') {
    const { items, structure } = data;
    return (
      <div className="vocab-table-card">
        <h3>{title}</h3>
        {structure && (
          <p className="structure-guide">
            Cấu trúc: <code>{structure}</code>
          </p>
        )}
        <table>
          <thead>
            <tr>
              <th>Tiếng Anh</th>
              <th>Tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.en}</td>
                <td>{item.vi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Default two-column layout
  return (
    <div className="vocab-table-card">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Tiếng Anh</th>
            <th>Tiếng Việt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.en}</td>
              <td>{item.vi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
