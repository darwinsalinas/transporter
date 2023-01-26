import { IsUUID, validate } from "class-validator";

export const isValidUUID = async (uuid: string) => {
    class IsValidUUID {
        @IsUUID()
        value: string;
    }

    let data = new IsValidUUID();
    data.value = uuid;

    const validated = await validate(data);

    return validated.length == 0;
}