export async function createMockITicket(requestNo:string){return {ticketNo:`IT-${Date.now()}`,status:"OPEN",provider:"MOCK_I_TICKET"}}
export async function mockFinacleCreate(employeeId:string){return {userId:`CBS-${employeeId}`,status:"CREATED",provider:"MOCK_FINACLE"}}
export async function mockFinacleVerify(userId:string){return {userId,status:"VERIFIED",provider:"MOCK_FINACLE"}}
export async function mockDigitalSignature(approverId:string){return {signerId:approverId,status:"SIGNED",provider:"MOCK_SIGNATURE"}}
