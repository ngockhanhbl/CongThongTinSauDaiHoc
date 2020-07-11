<template>
    <div class="pt-5">
        <div class="bg-main"  
           :style="{'background-image': 'url(' + require('@/assets/images/bg-searchdrug.png') + ')'}">   
            <div class="alphabet d-flex container justify-content-around">
                <div v-for="(alpha,index) in alphabet" :key="index" class="alphabet-item "> 
                        <span @click="searchByAlphabet(alpha)">{{alpha}}</span>
                </div>
            </div>

            <div class="d-flex flex-row align-items-center justify-content-center pt-3"> 
                <input class="search-input" v-model="search" type="text" >
                <div class="search-btn" @click="searchDrug()">&#x1F50D;</div>
            </div>

        </div>
        <div class="d-flex justify-content-center  align-items-baseline pt-2 list-drugs">
            <img src="@/assets/images/list.svg" alt />
            <h4 class="ml-2">Danh Sách Đề Tài, Luận Án</h4>
        </div>

        <b-container fluid class="py-3 bg_list_drug">
            <b-row class="mb-4">
                <b-col lg="6" class="my-1">
                    <b-form-group
                    label="Lọc"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="filterInput"
                    class="mb-0"
                    >
                    <b-input-group size="sm">
                        <b-form-input
                            v-model="filter"
                            type="search"
                            id="filterInput"
                            placeholder="Nhập từ khóa bạn muốn tìm kiếm"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Làm Mới</b-button>
                        </b-input-group-append>
                    </b-input-group>
                    </b-form-group>
                </b-col>
                <b-col sm="5" md="6" class="my-1">
                    <b-form-group
                    label="Hiển thị"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    label-for="perPageSelect"
                    class="mb-0"
                    >
                    <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                    ></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-table
            show-empty
            medium
            stacked="md"
            bordered
            striped
            :items="info"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            @filtered="onFiltered"
            >

            <template slot="index" slot-scope="row" class="d-flex justify-content-start">
                {{row.index + 1}}
            </template>

            <template slot="actions" slot-scope="row" class="d-flex justify-content-start">
                <b-button size="sm" @click="SeeDetailsDrug(row.item, row.index, $event.target)" class="btn-success text-white ">
                    Xem
                </b-button>
            </template>

            </b-table>
                    <b-row>
                    <b-col md="6" class="my-1">
                        <b-pagination
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        class="my-0"
                        ></b-pagination>
                    </b-col>
                    </b-row>
        </b-container>
          
        </div>
</template>


<script>
import axios from 'axios'
import AdminService from '@/services/AdminService';
import moment from 'moment';

export default {
    data () {
        return {
            alphabet:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            info:[],
            search:'',
            fields: [
                { key: 'index', label: 'STT', sortable: true, sortDirection: 'desc' },
                { key: 'tenDeTai', label: 'TÊN ĐỀ TÀI', sortable: true, sortDirection: 'desc' },
                { key: 'nghienCuuSinh', label: 'NGHIÊN CỨU SINH', sortable: true, sortDirection: 'desc' },
                { key: 'nguoiHuongDan', label: 'NGƯỜI HƯỚNG DẪN', sortable: true, sortDirection: 'desc' },
                { key: 'ngayBaoVe', label: 'NGÀY BẢO VỆ', sortable: true, sortDirection: 'desc',formatter: value => moment(value).locale('vi_VN').format('LLLL') },
            ],
            
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 20, 30],
            filter: null,
        }
    },
    async mounted(){
        this.info = (await AdminService.getAllDeTai()).data
        this.totalRows = this.info.length
        
    },
    methods:{
        async searchByAlphabet(word){
            console.log(word)
        },
        async searchDrug(){
            
        },
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
        },
        moment: function () {
            return moment();
      },
    }
}

</script>
<style scoped>
    .bg-main{
        background-repeat: no-repeat;
        width: 100%;
        height: 40vh;
        background: rgb(2,0,36);
        /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */
    }
    .alphabet{
        padding-top:40px;
    }
    .alphabet-item{
        color:white;
        cursor: pointer;
        font-size:0.9rem;
    }
    .alphabet-item:hover{
        text-decoration: underline;
    }
    .search-input{
        width:50vw;
        padding:.35rem;
        border:2px solid #40c4ff;
    }
    .search-btn{
        border:2px solid #40c4ff;
        padding:.35rem .5rem;
        background: #40c4ff;
        border-radius:0 5px 5px 0;
        cursor: pointer;
    }
    .add{
        color:#fff;
        background: #40c4ff;
        padding:0.5rem 1rem;
        cursor: pointer;
        border-radius: 5px 0 0 5px;
    }
    .radius_left{
        border-radius: 2px 0 0 2px;
    }
    .radius_right{
        border-radius:0 2px 2px 0;
    }
    .options{
        padding: 0.4rem 4.4rem;
        cursor: pointer;
        background: #fff;
    }
    .options img{
        height: 1rem;
        width: 1rem;
    }
    .name_option{
        margin-left: 0.25rem;
    }
    .ActiveClass{
        background: #40c4ff;
        color:#fff;
    }
    .list-drugs{
        background: #37ab86;
        color:#fff;
    }
    .list-drugs img{
        height: 1rem;
        width: 1rem;
    }
    .bg_list_drug{
        background: rgba(242, 242, 242, .3);
    }
    .width-100{
        width: 100%;
    }

</style>

