import { Link } from "react-router-dom";
import React from "react";
import "../styles/AssetManage.scss";

export const AssetManage = () => {
  return (
    <div className="assetManageWrap">
      <div className="assetManageTitle">
        <div className="assetManageTitleBox">
          <div className="boldTitle">
            <span>자산 입력하기</span>
          </div>
          <div className="subTitle">
            <span>자산을 입력하고 나의 투자 성향을 알아보세요!</span>
          </div>
        </div>
      </div>
      <form className="assetManageContent">
        <div className="assetManageContentBox">
          <div className="assetManageContentTitle">
            <span>제목</span>
            <input type="text" placeholder="제목을 입력하세요"></input>
          </div>
          <div className="assetManageInput">
            
          </div>
          <div className="assetManageSubmitBtn">
            <button type="submit">
              <span>입력하기</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    
  )
}