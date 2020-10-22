import Direction from "modules/Model/Direction";
import Member from "modules/Model/Member";
import { StructureType } from "modules/Model/StructureType";


export default class MemberGestor{
    //
    private members : [Member];



    public getRolMembers() : [Member] {return null};
    public setRol(value : StructureType) : void {};
    public setDirection(direction : Direction) : void {};
    public getDirection() : Direction {return null};
    public getMember(): Member {return null};
    public deleteMiembro(pIdData : number) : boolean {return null};
    public getFacilitador() : boolean {return null};
    public setFacilitador(pData : boolean) {return null};
    public getPertenencia():[Member] {return null};
    public setPertenecia(Ppostdata : number, pId : number) :void {};

}