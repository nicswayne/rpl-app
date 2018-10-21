// @flow
import React, { Component } from 'react';
import { StyledTable } from './styled';

// import Api from "utils/api"
import Loader from 'common/Loader';
import { Flex } from 'common/Layout';
import Text from 'common/Text';

type Columns = {
    Header: string,
    accessor: string,
    width?: number,
    Cell?: Object => any,
};

type Props = {
    columns: Array<Columns>,
    defaultSort?: string,
    data?: Array<any>,
    handleClick?: Object => any,
    url?: string,
};

type State = {
    data: Array<Object>,
    loading: boolean,
    pages: number,
    rowCount: number,
};

function Loading({ loading }) {
    if (loading)
        return (
            <Flex justify="center">
                <Loader />
            </Flex>
        );
    return null;
}

export default class Table extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            pages: -1,
            rowCount: -1,
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.data || [] });
    }

    render() {
        const {
            columns,
            defaultSort,
            // handleClick,
            // url
        } = this.props;
        const { data, loading, pages, rowCount } = this.state;

        return (
            <StyledTable
                className="-striped"
                minRows={0}
                showPaginationTop={this.state.pages > 0}
                showPaginationBottom={false}
                defaultSorted={
                    defaultSort ? [{ id: defaultSort, desc: true }] : []
                }
                defaultPageSize={20}
                multiSort={false}
                data={data}
                pages={pages}
                loading={loading}
                columns={columns}
                // getTrProps={(state, rowInfo) => {
                //     if (rowInfo && rowInfo.row) {
                //         return {
                //             onClick: e => {
                //                 e.preventDefault();
                //                 handleClick && handleClick(rowInfo.row);
                //             },
                //         };
                //     } else {
                //         return {};
                //     }
                // }}
                // manual
                // onFetchData={(state, instance) => {
                //   if(!url) return
                //   this.setState({loading: true})
                //   const sorted = state.sorted.length ? `&sortField=${state.sorted[0].id}&sortDirection=${state.sorted[0].desc ? 'desc': 'asc'}` : "";
                //   Api.get(`${url}?limit=${state.pageSize}&offset=${(state.page * state.pageSize)}${sorted}`)
                //   .then(res => {
                //     this.setState({
                //       data: res.data,
                //       pages: res.pagination.pageCount,
                //       rowCount: res.pagination.rowCount,
                //       loading: false
                //     })
                //   })
                // }}
                rowCount={rowCount}
                LoadingComponent={Loading}
                NoDataComponent={() => <Text>No Data</Text>}
            />
        );
    }
}
