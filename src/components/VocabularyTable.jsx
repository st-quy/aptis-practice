// src/components/VocabularyTable.jsx
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { vocabularyData } from '../data/VocabularyData';

export const VocabularyTable = ({ title, data, tableType = 'two-column', dataKey }) => {
  const [tableData, setTableData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Hook to populate data from data file or use provided data
  useEffect(() => {
    setLoading(true);
    try {
      if (dataKey) {
        // Load data from vocabularyData using the key path (e.g., "places.indoors")
        const keys = dataKey.split('.');
        let loadedData = vocabularyData;
        for (const key of keys) {
          loadedData = loadedData[key];
        }
        setTableData(loadedData);
      } else if (data) {
        // Use provided data prop
        setTableData(data);
      }
    } catch (error) {
      console.error('Error loading vocabulary data:', error);
    } finally {
      setLoading(false);
    }
  }, [dataKey, data]);

  if (loading || !tableData) {
    return <div className="vocab-table-card"><p>Loading...</p></div>;
  }

  if (tableType === 'places') {
    // Flatten data and track rowSpans for categories
    const flatData = [];

    tableData.forEach((group) => {
      group.items.forEach((item, idx) => {
        flatData.push({
          ...item,
          category: group.category,
          _isFirstInCategory: idx === 0,
          _rowSpan: idx === 0 ? group.items.length : 0,
        });
      });
    });

    const columns = [
      {
        title: 'Phân biệt',
        dataIndex: 'category',
        key: 'category',
        width: '20%',
        render: (text, record) => ({
          children: text,
          props: {
            rowSpan: record._rowSpan,
          },
        }),
      },
      {
        title: 'Tiếng Anh',
        dataIndex: 'en',
        key: 'en',
        width: '40%',
      },
      {
        title: 'Tiếng Việt',
        dataIndex: 'vi',
        key: 'vi',
        width: '40%',
      },
    ];

    return (
      <div className="vocab-table-card">
        <h3>{title}</h3>
        <Table
          columns={columns}
          dataSource={flatData.map((item, idx) => ({ ...item, key: idx }))}
          pagination={false}
          bordered
        />
      </div>
    );
  }

  if (tableType === 'description') {
    const { items, structure } = tableData;

    const columns = [
      {
        title: 'Tiếng Anh',
        dataIndex: 'en',
        key: 'en',
        width: '50%',
      },
      {
        title: 'Tiếng Việt',
        dataIndex: 'vi',
        key: 'vi',
        width: '50%',
      },
    ];

    return (
      <div className="vocab-table-card">
        <h3>{title}</h3>
        {structure && (
          <p className="structure-guide">
            Cấu trúc: <code>{structure}</code>
          </p>
        )}
        <Table
          columns={columns}
          dataSource={items.map((item, idx) => ({ ...item, key: idx }))}
          pagination={false}
          bordered
        />
      </div>
    );
  }

  // Default two-column layout
  const columns = [
    {
      title: 'Tiếng Anh',
      dataIndex: 'en',
      key: 'en',
      width: '50%',
    },
    {
      title: 'Tiếng Việt',
      dataIndex: 'vi',
      key: 'vi',
      width: '50%',
    },
  ];

  return (
    <div className="vocab-table-card">
      <h3>{title}</h3>
      <Table
        columns={columns}
        dataSource={tableData.map((item, idx) => ({ ...item, key: idx }))}
        pagination={false}
        bordered
      />
    </div>
  );
};
