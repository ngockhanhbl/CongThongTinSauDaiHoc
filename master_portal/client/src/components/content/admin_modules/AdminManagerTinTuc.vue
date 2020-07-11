<template>
    <div>
            <div class="main_register m-auto ">
              <div class="d-flex justify-content-between pr-5 pt-4 ">
                <div class="pl-5 pt-3">Xin Chào Admin</div>
                <div class="pl-5 pt-3">
                    <b-button variant="primary" v-b-modal.modal-tintuc class="text-white">
                      Thêm Bản Tin
                    </b-button>  
                </div>
              </div>
                  <b-row class="px-5">
                    <b-col md="6" class="my-3">
                      <b-form-group label-cols-sm="3" label="Lọc" class="mb-0">
                        <b-input-group>
                          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
                          <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                    </b-col>

                    <b-col md="6" class="my-3">
                      <b-form-group label-cols-sm="3" label="Mỗi Trang" class="mb-0">
                        <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                <div class="register">
                    <div class="p_1r mlr_1-5r" >
                      <b-table
                        small 
                        show-empty
                        bordered
                        striped
                        hover
                        outlined
                        :items="tintuc"
                        :fields="fields"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        @filtered="onFiltered"
                      >
                        <template slot="actions" slot-scope="row" >
                          <b-button class="ml-3 mr-2" size="sm" @click="TinTucDetails(row.item, row.index, $event.target)" >
                            <img src="@/assets/images/contract.svg" />
                          </b-button>
                          <b-button size="sm" @click="DeleteJob(row.item, row.index, $event.target)">
                            <img src="@/assets/images/delete.svg" /> 
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

                </div>
            </div>  
      </div>

      <b-modal id="modal-tintuc" style="color:tomato" size='lg' title="Tạo Bản Tin ">
          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Loại</p>            
            <span class="col-sm-9">
              <select v-model="selected">
                <option disabled value="">Chọn Loại Tin Tức </option>
                <option>Tin Tức Và Sự Kiện</option>
                <option>Thông Báo</option>
                <option>Tuyển Sinh Cao Học</option>
              </select>
            </span>
          </div>

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Tiêu Đề</p>
            <span class="col-sm-9"><input type="text" v-model="title" class="width-100 style_input"></span>
          </div>


          <div class="my-2 d-flex" >
            <p class="col-sm-3 title_editor">Ảnh Bìa</p>
            <span class="col-sm-9">
                  <vue-editor v-model="image"></vue-editor>
              </span>
          </div>


          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Nội Dung</p>
            <span class="col-sm-9">
                  <vue-editor v-model="des"></vue-editor>
              </span>
          </div>

        <template v-slot:modal-footer>
            <div class="w-100">
            <b-button
                variant="secondary"
                size="sm"
                class="float-left text-white"
                @click="resetForm"
            >
                Đóng
            </b-button>
            <b-button
                variant="warning"
                size="sm"
                class="float-right SendReqCreateTinTuc text-white"
                @click="SendRequestCreateTinTuc"
            >
                <img src="@/assets/images/send.svg" /> Gửi Yêu Cầu Tạo Tin
            </b-button>
            </div>
        </template>
      </b-modal>



      <!-- DETAILS -->
      <b-modal id="modal-tintucdetails" size='lg' title="Thông Tin tức Chi Tiết">
          <div class="my-2 d-flex">

            <p class="col-sm-3 title_editor">Loại Tin Tức</p>
            <span class="col-sm-9 d-flex" >
              <select v-model="infoModal.type">
                <option value="" hidden disabled>{{infoModal.type}}</option>
                <option value="Tin Tức Và Sự Kiện">Tin Tức Và Sự Kiện</option>
                <option value="Thông Báo">Thông Báo</option>
                <option value="Tuyển Sinh Cao Học">Tuyển Sinh Cao Học</option>
              </select>
            </span>
          </div>

          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Tiêu Đề</p>

            <span class="col-sm-9">
              <input type="text" v-model="infoModal.title" class="width-100 style_input">
            </span>
          </div> 

          <div class="my-2 d-flex" >
            <p class="col-sm-3 title_editor">Ảnh Bìa</p>
            <span class="col-sm-9">
                  <vue-editor v-model="infoModal.image"></vue-editor>
              </span>
          </div>


          <div class="my-2 d-flex">
            <p class="col-sm-3 title_editor">Mô Tả</p>
            <span class="col-sm-9">
                  <vue-editor v-model="infoModal.des"></vue-editor>
              </span>
          </div>



        <template v-slot:modal-footer>
            <div class="w-100">
            <b-button
                variant="secondary"
                size="sm"
                class="float-left text-white"
                @click="resetModal"
            >
                Đóng
            </b-button>
            <b-button
                variant="warning"
                size="sm"
                class="float-right SendReqCreateTinTuc text-white"
                @click="SendRequestUpdateTinTuc"
            >
                <img src="@/assets/images/send.svg" /> Gửi Yêu Cầu Tạo Tin
            </b-button>
            </div>
        </template>
      </b-modal>
      
    </div>
</template>

<script>
import AdminService from '@/services/AdminService';
import { VueEditor } from "vue2-editor";
import moment from 'moment';
import firebase from 'firebase';
import {db, storage} from '../../firebaseInit'

  export default {
    data() {
      return {
        fields: [
          { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
          { key: 'type', label: 'Khoa'},
          { key: 'title', label: 'Tiêu Đề', sortable: true, class: 'text-center'},
          { key: 'updatedAt', label: 'Thời Gian'},//,formatter: value => value.moment().format('MMMM Do YYYY, h:mm:ss a')
          { key: 'actions', label: 'Hành động', class: 'action ' },
        ],
        
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        filter: null,
        tintuc:null,
        tintucdetails:null,
        cv:null,
        infoModal: {
          des: '',
          title:'',
          type:'',
          image:''
        },
        modalCV:{
          title:''
        },
        selected:'',
        title:'',
        image:'',
        des:'',
        selected_modify:'',
        name_modify:'',
        location_modify:'',
        des_modify:'',
        currentIndex:''
      }
    },
    async mounted() {
      this.tintuc = (await AdminService.getAllTinTuc()).data
      this.totalRows = this.tintuc.length

    },
    methods: {
      async SendRequestUpdateTinTuc(){
        if(!this.infoModal.type){
          this.$toasted.show(`Vui lòng chọn loại tin tức !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.infoModal.title){
          this.$toasted.show(`Vui lòng không bỏ trống tiêu đề !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.infoModal.des){
          this.$toasted.show(`Vui lòng không bỏ trống mô tả tin tức !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }
        else{
          await AdminService.SendRequestUpdateTinTuc({
            id:this.infoModal.id,
            type:this.infoModal.type,
            title:this.infoModal.title,
            image:this.infoModal.image,
            des:this.infoModal.des,
          })
            this.$toasted.show(`Đã cập nhật tin tức thành công !!`, { 
              theme: "bubble", 
              position: "bottom-right", 
              duration : 3500
          });
          this.tintuc[this.currentIndex].title = this.infoModal.title;
          this.tintuc[this.currentIndex].type = this.infoModal.type;
          this.tintuc[this.currentIndex].image = this.infoModal.image;
          this.tintuc[this.currentIndex].des = this.infoModal.des;

          this.resetModal()
        }
      },
      async SendRequestCreateTinTuc(){
        if(!this.selected){
          this.$toasted.show(`Vui lòng chọn loại tin tức !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.title){
          this.$toasted.show(`Vui lòng không bỏ trống tên tin tức !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }else if(!this.des){
          this.$toasted.show(`Vui lòng không bỏ trống nội dung  !!`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2000
          });
        }
        else{
          const response = await AdminService.SendRequestCreateTinTuc({
            type:this.selected,
            title:this.title,
            des:this.des,
            image:this.image,
          })
            this.$toasted.show(`Đã thêm tin tức thành công !!`, { 
              theme: "bubble", 
              position: "bottom-right", 
              duration : 3500
          });
          this.tintuc = (await AdminService.getAllTinTuc()).data
          this.resetForm()
        }
      },
      async DeleteJob(item,index,button){
        console.log(item.id)
        try{
          const response = await AdminService.DeleteJob({
            id:item.id
          })
          if(response.status === 200){
            this.$toasted.show(`đã xóa tin tức thành công !!`, { 
                theme: "bubble", 
                position: "bottom-right", 
                duration : 2500
            });
            if (~index)
              this.tintuc.splice(index, 1)
          }
        }catch(err){
          this.$toasted.show(`${err}`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2500
          });
        }
      },
      async PauseJob(item,index,button){
        try{
          const response = await AdminService.SwitchJobStatus({
            id:item.id
          })
        if(response.status === 200){
          this.$toasted.show(`cập nhật trạng thái thành công !!`, { 
              theme: "bubble", 
              position: "bottom-right", 
              duration : 2000
          });
          item.status = !item.status
        }
        }catch(err){
          this.$toasted.show(`${err}`, { 
              theme: "toasted-primary", 
              position: "bottom-right", 
              duration : 2500
          });
        }
      },
      
      TinTucDetails(item,index,button){
        this.currentIndex = index
        this.infoModal.id =  item.id;
        this.infoModal.des = item.des;
        this.infoModal.title = item.title;
        this.infoModal.type = item.type;
        this.infoModal.image = item.image;
        this.$root.$emit('bv::show::modal', 'modal-tintucdetails', '#btnShow')
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      moment: function () {
        return moment();
      },
      resetForm(){
        this.selected = '';
        this.title = '';
        this.image = '';
        this.des = '';
        this.$root.$emit('bv::hide::modal', 'modal-tintuc', '#btnShow')
      },
      resetModal(){
        this.$root.$emit('bv::hide::modal', 'modal-tintucdetails', '#btnShow')
      }
    },
    components: {
        VueEditor
    },
    filters: {
      moment: function (date) {
        return moment(date).format('L');
      }
    },
  }
</script>

<style scoped>

*{
    font-size: 14px;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    color: rgba(0,0,0,.54);
}
.bg{
    background-repeat: no-repeat;
    background-size:cover
}
.main_register{
    max-width: 95vw;
    width: 100%;
    background:white;
    border-radius: 2px;
    background: white;
}
.p_1r{
    padding: 1rem;
}
.mlr_1-5r{
    margin: 0 1.5rem;
}
.hello{
  padding-left: 2rem;

}
.modify-btn{
  color:#365899;
}
.modify-btn:hover{
  text-decoration: underline;
  color: #273f6e;
}

.model_wrapper{
  align-items: center;
  border-bottom: 1px solid rgba(190,195,201);
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.model_wrapper:first-child{
  border-top: 1px solid #aaa;
}
.model_wrapper:last-child{
  border-bottom: 1px solid #aaa;
}
.model_wrapper:hover{
  background: #f5f6f7;
  
}
.model_title{
  color: #333;
}
.orange-btn{
  background:#FF6F00;
  color:white;
  
}
.alert-error{
  color:red;
}
.style_input{
  border: 1px solid rgba(0,0,0,.54);
  border-radius: 2px;
  padding:0.25rem;
}
.width-100{
  width: 100%;
}
.title_editor{
  font-weight: bold;
  color:#007CC8;
}
.SendReqCreateTinTuc img{
  height:1rem;
  width:1rem;
}
.action img{
  height:1.5rem;
  width:1.5rem;

}
.action button{
  background: none;
  border: none;
}


.modify_symbol{
  padding:.3rem .5rem;
  border: 1px solid aliceblue;
  border-radius: 3px;
  background: aliceblue;
  cursor: pointer;
}
    .ellipsis{
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 150px;
    }
</style>
 