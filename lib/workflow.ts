import {db} from "./db";
export async function createApprovalChain(requestId:string){
 const a=[["SUP001","Demo Supervisor","SUPERVISOR"],["DIV001","Demo Division Head","DIVISION"],["HR001","Demo HR Approver","HR"]];
 await db.approval.createMany({data:a.map(x=>({requestId,approverId:x[0],approverName:x[1],stage:x[2]}))});
}
export function nextStatus(stage:string){return stage==="SUPERVISOR"?"DIVISION_APPROVAL":stage==="DIVISION"?"HR_APPROVAL":"PENDING_ICT"}
