import { ForbiddenException, Injectable, Request } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/database/entity/user.entity';
import { ElasticSearchModule } from 'src/elastic/elatic.module';
import { ElasticSearchService } from 'src/elastic/elatic.service';
import { CreateUserPayload } from './dto/createUser.dto';
import { USER_TYPE } from 'src/constant';
import { errorMessage } from 'src/shared/message/errorMessage';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

    private readonly elasticSearchService: ElasticSearchService

  ) {}
  async createUser(body: CreateUserPayload, req: any) {
    if (req.user.userType != USER_TYPE.ADMIN) {
      throw new ForbiddenException(errorMessage['FORBIDEN_CAN\'T_ACCESS'])
    }
    let user = await this.userModel.create(body)
    await this.elasticSearchService.saveUser(user)
    return user
  }
  async getUser(@Request() req) {
    return req.user;
  }

  async searchParties(searchBy: string) {
    let res = await this.elasticSearchService.findUsers(searchBy)
    console.log(res)
    return res
  }
}
